import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

import { TodosService } from './services/todos.service';
import { MessagesService } from './features/notify/messages.service';
import { UiDialogService } from './features/ui-dialog/ui-dialog.service';

import { Todos } from './Todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';

  @ViewChild('task') task!: ElementRef;
  @ViewChild('picker') picker!: MatDatepicker<Date>;

  index!: number;
  notifyMessages = {
    errorAddTask: 0,
    successDeleteTask: 1,
    successDoneTask: 2,
    successAddTask: 3,
  };

  constructor(
    public service: TodosService,
    private msgService: MessagesService,
    private dialogService: UiDialogService
  ) {}

  /**
   * Check if task name is not to short, if not -> opens deadline calendar
   */
  setDeadline() {
    const taskName = this.task.nativeElement.value;
    if (taskName.length < 5) {
      this.msgService.loadOverlay(this.notifyMessages.errorAddTask);
      this.inputOptions();
      return;
    }

    this.picker.open();
  }

  /**
   * Add task to todo list
   * @param date is a date that user chosen
   */
  addTask(date: Date) {
    const taskName = this.task.nativeElement.value;

    this.msgService.loadOverlay(this.notifyMessages.successAddTask);
    this.index = this.randomId();
    this.service.addTask(taskName, this.index, date);
    this.inputOptions();
  }

  /**
   * Delete task from todo list
   * @param $event task object
   */
  deleteTask($event: Todos) {
    this.dialogService.loadUiDailog(
      $event,
      this.notifyMessages.successDeleteTask
    );
  }

  /**
   * Changes the done task on true or false
   * @param $event task object
   */
  doneTask($event: Todos) {
    this.msgService.loadOverlay(this.notifyMessages.successDoneTask);
    this.service.changeDone($event.id);
  }

  /**
   * Settings for input task name
   */
  inputOptions() {
    this.task.nativeElement.value = '';
    this.task.nativeElement.focus();
  }

  /**
   * @returns a random id for task
   */
  randomId(): number {
    return Date.now() * Math.floor(Math.random() * 10);
  }
}
