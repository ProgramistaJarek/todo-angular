import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

import { TodosService } from 'src/app/services/todos.service';
import { MessagesService } from 'src/app/features/notify/service/messages.service';

import { Todos } from 'src/app/Todos';

export interface DialogData {
  task: Todos;
  id: number;
}

@Component({
  selector: 'app-ui-dialog',
  template: ` <div>
    <h3>Do you want to delete this task?</h3>
    <p>{{ this.data.task.name }}</p>
    <button mat-button (click)="onBtnClick(true)">Yes</button>
    <button mat-button (click)="onBtnClick(false)">No</button>
  </div>`,
  styleUrls: ['./ui-dialog.component.scss'],
})
export class UiDialogComponent {
  constructor(
    @Inject(DIALOG_DATA) public data: DialogData,
    private service: TodosService,
    private dialogRef: DialogRef,
    private msgService: MessagesService
  ) {}

  onBtnClick(event: boolean) {
    if (event === true) {
      this.service.deleteTask(this.data.task);
      this.msgService.loadOverlay(this.data.id);
      this.dialogRef.close();
    } else {
      this.dialogRef.close();
    }
  }
}
