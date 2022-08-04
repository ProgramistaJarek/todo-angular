import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifyComponent } from 'src/app/components/notify/notify.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [NotifyComponent],
  exports: [NotifyComponent, OverlayModule],
  imports: [CommonModule],
})
export class NotifyModule {}
