import { Component, Inject } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-ui-dialog',
  templateUrl: './ui-dialog.component.html',
  styleUrls: ['./ui-dialog.component.scss'],
})
export class UiDialogComponent {
  constructor(
    @Inject(DIALOG_DATA) public data: Todos,
    private service: TodosService,
    public dialogRef: DialogRef
  ) {}

  onBtnClick(event: boolean) {
    if (event === true) {
      this.service.deleteTask(this.data);
      this.dialogRef.close();
    } else {
      this.dialogRef.close();
    }
  }
}
