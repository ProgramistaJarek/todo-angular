import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { UiEditTaskService } from 'src/app/features/ui-edit-task/ui-edit-task.service';

import { DatePipe } from '@angular/common';
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
  
  constructor(private datePipe: DatePipe, private editTaskService: UiEditTaskService) { }

  onClickDone() {
    this.onDoneTask.emit(this.item);
  }

  onClickDelete() {
    this.onDeleteTask.emit(this.item);
  }

  onClickEdit() {
    this.editTaskService.editTask(this.item);
  }

  sameDates(): boolean {
    const dateOne = this.datePipe.transform(Date.now(), 'dd MMM, yyyy') ;
    const dateTwo = this.datePipe.transform(this.item.deadline, 'dd MMM, yyyy');

    if (dateOne != null && dateTwo!=null && (dateOne > dateTwo)) {
      return true;
    } else {
      return false;
    }
  }
}
