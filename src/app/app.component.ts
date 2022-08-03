import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { TodosService } from './services/todos.service';
import { MessagesService } from './services/messages.service';

import { NotifyDirective } from './directives/notify.directive';
import { NotifyComponent } from './components/notify/notify.component';

import { Todos } from './Todos';
import { MessageItem } from './message-item';

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
  interval!: number;
  delay: number = 1500;

  index!: number;
  msg!: MessageItem[];
  indexMsg: number = 0;

  arr = {
    errorAddTask: 0,
    successDeleteTask: 1,
    successDoneTask: 2,
  };

  constructor(
    public service: TodosService,
    private msgService: MessagesService
  ) {}

  ngOnInit(): void {
    this.msg = this.msgService.getMessages();
    console.log(this.msg);
  }

  addTask() {
    const taskName = this.task.nativeElement.value;

    if (this.task.nativeElement.value.length < 5) {
      this.indexMsg = this.arr.errorAddTask;
      this.loadComponent(this.indexMsg);
      this.inputOptions();
      return;
    }

    this.index = this.randomId();
    this.service.addTask(taskName, this.index);
    this.inputOptions();
  }

  deleteTask($event: Todos) {
    this.indexMsg = this.arr.successDeleteTask;
    this.loadComponent(this.indexMsg);
    this.service.deleteTask($event);
  }

  doneTask($event: Todos) {
    this.indexMsg = this.arr.successDoneTask;
    this.loadComponent(this.indexMsg);
    this.service.changeDone($event);
  }

  inputOptions() {
    this.task.nativeElement.value = '';
    this.task.nativeElement.focus();
  }

  randomId(): number {
    return Date.now() * Math.floor(Math.random() * 100);
  }

  loadComponent(idx: number) {
    this.notifyHost.viewContainerRef.clear();
    const componentRef =
      this.notifyHost.viewContainerRef.createComponent(NotifyComponent);
    const msgItem = this.msg[idx];

    if (msgItem.data.type === 'success') {
      componentRef.instance.data = msgItem.data;
      //componentRef.instance.errorType = type;
    }

    if (msgItem.data.type === 'error') {
      componentRef.instance.data = msgItem.data;
      //componentRef.instance.errorType = type;
    }

    this.interval = window.setTimeout(() => {
      componentRef.destroy();
    }, this.delay);
  }
}
