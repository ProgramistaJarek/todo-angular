import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { TodosService } from 'src/app/services/todos.service';

import { Todos } from 'src/app/Todos';

export interface DialogData {
  task: Todos;
}

@Component({
  selector: 'app-ui-edit-task',
  templateUrl: './ui-edit-task.component.html',
  styleUrls: ['./ui-edit-task.component.scss'],
})
export class UiEditTaskComponent {
  @ViewChild('picker') picker!: MatDatepicker<Date>;
  @ViewChild('task') task!: ElementRef;
  dateObject!: any;

  constructor(
    @Inject(DIALOG_DATA) public data: DialogData,
    private dialogRef: DialogRef,
    private service: TodosService
  ) {}

  editTask() {
    const taskName = this.task.nativeElement.value;
    this.service.updateTask(this.data.task.id, taskName, this.dateObject);
    this.dialogRef.close();
  }
}
