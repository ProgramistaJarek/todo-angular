import { Component,
  Input,
  Output,
  EventEmitter, } from '@angular/core';
  import { Todos } from '../../Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item!: Todos;
  @Output() onDeleteTask = new EventEmitter<Todos>;
  @Output() onDoneTask = new EventEmitter<Todos>;

  constructor() {}

  onClickDone() {
    this.onDoneTask.emit(this.item);
    //this.service.changeDone(this.item);
  }

  onClickDelete() {
    this.onDeleteTask.emit(this.item); 
    //this.service.deleteTask(this.item);
  }

}
