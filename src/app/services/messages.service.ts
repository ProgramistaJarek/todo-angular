import { Injectable } from '@angular/core';

import { MessageItem } from '../message-item';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  getMessages() {
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
}
