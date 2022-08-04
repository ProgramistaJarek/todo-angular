import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { TodosService } from './services/todos.service';
import { MessagesService } from './services/messages.service';
import { NotifyDirective } from './directives/notify.directive';

import { Todos } from './Todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo';

  @ViewChild('task') task!: ElementRef;
  @ViewChild(NotifyDirective, { static: true })
  private notifyHost!: NotifyDirective;

  index!: number;

  notifyMessages = {
    errorAddTask: 0,
    successDeleteTask: 1,
    successDoneTask: 2,
  };

  constructor(
    public service: TodosService,
    private msgService: MessagesService
  ) {}

  ngOnInit(): void {}

  addTask() {
    const taskName = this.task.nativeElement.value;

    if (taskName.length < 5) {
      /* this.msgService.loadComponent(
        this.notifyMessages.errorAddTask,
        this.notifyHost
      ); */
      this.msgService.loadOverlay(this.notifyMessages.errorAddTask);
      this.inputOptions();
      return;
    }

    this.index = this.randomId();
    this.service.addTask(taskName, this.index);
    this.inputOptions();
  }

  deleteTask($event: Todos) {
    /* this.msgService.loadComponent(
      this.notifyMessages.successDeleteTask,
      this.notifyHost
    ); */
    this.msgService.loadOverlay(this.notifyMessages.successDeleteTask);
    this.service.deleteTask($event);
  }

  doneTask($event: Todos) {
    /* this.msgService.loadComponent(
      this.notifyMessages.successDoneTask,
      this.notifyHost
    ); */
    this.msgService.loadOverlay(this.notifyMessages.successDoneTask);
    this.service.changeDone($event);
  }

  inputOptions() {
    this.task.nativeElement.value = '';
    this.task.nativeElement.focus();
  }

  randomId(): number {
    return Date.now() * Math.floor(Math.random() * 100);
  }
}
