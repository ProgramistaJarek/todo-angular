import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiDialogComponent } from '../ui-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UiDialogComponent],
  exports: [UiDialogComponent, DialogModule],
  imports: [CommonModule, MatButtonModule],
})
export class UiDialogModule {}
