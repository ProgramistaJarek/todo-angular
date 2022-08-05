import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiEditTaskComponent } from './components/ui-edit-task.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [UiEditTaskComponent],
})
export class UiEditTaskModule {}
