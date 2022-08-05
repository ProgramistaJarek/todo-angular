import { Injectable } from '@angular/core';

import { Dialog } from '@angular/cdk/dialog';
import { UiEditTaskComponent } from './components/ui-edit-task.component';
import { Todos } from 'src/app/Todos';

@Injectable({
  providedIn: 'root',
})
export class UiEditTaskService {
  constructor(private dialog: Dialog) {}

  editTask(task: Todos) {
    const dialogRef = this.dialog.open(UiEditTaskComponent, {
      data: { task: task },
    });
  }
}
