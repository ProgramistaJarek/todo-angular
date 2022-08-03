import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notify',
  template: ` <div class="notify" [ngClass]="errorType">
    <p>{{ message }}</p>
  </div>`,
  styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent {
  @Input() message!: string;
  @Input() errorType!: string;
  constructor() {}
}
