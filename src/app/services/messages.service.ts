import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { NotifyComponent } from '../components/notify/notify.component';
import { NotifyDirective } from '../directives/notify.directive';

import { MessageItem } from '../message-item';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  interval!: number;
  delay: number = 1500;
  msg!: MessageItem[];

  constructor(private overlay: Overlay) {}

  getMessages(): MessageItem[] {
    return [
      new MessageItem({
        name: 'Your task name is to short',
        type: 'error',
      }),
      new MessageItem({
        name: 'You successfully delete your task',
        type: 'success',
      }),
      new MessageItem({
        name: 'You successfully change your task',
        type: 'success',
      }),
    ];
  }

  loadOverlay(idx: number) {
    const msg = this.getMessages()[idx];

    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().top().right(),
    });
    const filePreviewPortal = new ComponentPortal(NotifyComponent);
    const cmpRef = overlayRef.attach(filePreviewPortal);
    cmpRef.instance.data = msg.data;

    this.interval = window.setTimeout(() => {
      overlayRef.dispose();
    }, this.delay);
  }

  loadComponent(idx: number, host: NotifyDirective) {
    const msg = this.getMessages()[idx];

    host.viewContainerRef.clear();
    const componentRef = host.viewContainerRef.createComponent(NotifyComponent);

    componentRef.instance.data = msg.data;

    this.interval = window.setTimeout(() => {
      componentRef.destroy();
    }, this.delay);
  }
}
