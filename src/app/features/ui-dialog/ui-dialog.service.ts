import { Injectable } from '@angular/core';

import { Dialog } from '@angular/cdk/dialog';
import { UiDialogComponent } from './components/ui-dialog.component';
import { Todos } from 'src/app/Todos';

@Injectable({
  providedIn: 'root',
})
export class UiDialogService {
  constructor(private dialog: Dialog) {}

  /**
   * Creates a dialog yes or no for deleting task
   * @param task is a task object
   * @param idx takes a id of messages service to display
   */
  loadUiDailog(task: Todos, idx: number) {
    const dialogRef = this.dialog.open(UiDialogComponent, {
      data: { task: task, id: idx },
    });
  }
}
