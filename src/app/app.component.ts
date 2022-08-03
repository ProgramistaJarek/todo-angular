import { Component, ViewChild, ElementRef } from '@angular/core';
import { NotifyDirective } from './directives/notify.directive';
import { TodosService } from './services/todos.service';
import { NotifyComponent } from './components/notify/notify.component';
import { Todos } from './Todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  @ViewChild('task') task!: ElementRef;
  @ViewChild(NotifyDirective, { static: true })
  private notifyHost!: NotifyDirective;
  interval: number | undefined;
  index!: number;

  constructor(public service: TodosService) {}

  addTask() {
    const taskName = this.task.nativeElement.value;

    if (this.task.nativeElement.value.length < 5) {
      this.loadComponent('Your task name is to short', 'error');
      this.inputOptions();
      return;
    }

    this.index = this.randomId();
    this.service.addTask(taskName, this.index);
    this.inputOptions();
  }

  deleteTask($event: Todos) {
    this.loadComponent('You successfully delete your task', 'success');
    this.service.deleteTask($event);
  }

  doneTask($event: Todos) {
    this.loadComponent('You successfully change your task', 'success');
    this.service.changeDone($event);
  }

  inputOptions() {
    this.task.nativeElement.value = '';
    this.task.nativeElement.focus();
  }

  randomId(): number {
    return Date.now() * Math.floor(Math.random() * 100);
  }

  loadComponent(msg: string, type: string) {
    this.notifyHost.viewContainerRef.clear();
    const componentRef =
      this.notifyHost.viewContainerRef.createComponent(NotifyComponent);

    if (type === 'success') {
      componentRef.instance.message = msg;
      componentRef.instance.errorType = type;
    }

    if (type === 'error') {
      componentRef.instance.message = msg;
      componentRef.instance.errorType = type;
    }

    this.interval = window.setTimeout(() => {
      componentRef.destroy();
    }, 4000);
  }
}
