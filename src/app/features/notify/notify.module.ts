import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifyComponent } from './components/notify.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [NotifyComponent],
  exports: [NotifyComponent, OverlayModule],
  imports: [CommonModule],
})
export class NotifyModule {}
