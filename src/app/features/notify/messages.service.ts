import { Injectable } from '@angular/core';

import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { NotifyComponent } from './components/notify.component';

import { MessageItem } from 'src/app/message-item';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  interval!: number;
  delay: number = 1500;
  msg!: MessageItem;

  constructor(private overlay: Overlay) {}

  /**
   * Messages to display about success or error
   * @returns an array of MessageItem
   */
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
      new MessageItem({
        name: 'You successfully add your task',
        type: 'success',
      }),
    ];
  }

  /**
   * Creates a NotifyComponent to display message
   * @param idx which message should be displays
   */
  loadOverlay(idx: number) {
    const msg = this.getMessages()[idx];

    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().top().right(),
    });
    const containerPortal = new ComponentPortal(NotifyComponent);
    const cmpRef = overlayRef.attach(containerPortal);
    cmpRef.instance.data = msg.data;

    this.interval = window.setTimeout(() => {
      overlayRef.dispose();
    }, this.delay);
  }
}
