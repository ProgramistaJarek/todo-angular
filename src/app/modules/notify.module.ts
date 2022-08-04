import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyDirective } from 'src/app/directives/notify.directive';
import { NotifyComponent } from 'src/app/components/notify/notify.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [NotifyComponent, NotifyDirective],
  exports: [NotifyComponent, NotifyDirective, OverlayModule],
  imports: [CommonModule],
})
export class NotifyModule {}
