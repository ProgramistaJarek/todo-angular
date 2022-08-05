import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FilterTaskPipe } from './pipes/filter-task.pipe';
import { TooltipDirective } from './features/directives/tooltip.directive';

import { NotifyModule } from './features/notify/notify.module';
import { UiDialogModule } from './features/ui-dialog/ui-dialog.module';
import { UiEditTaskModule } from './features/ui-edit-task/ui-edit-task.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterTaskPipe,
    TooltipDirective,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    NotifyModule,
    UiDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    UiEditTaskModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
