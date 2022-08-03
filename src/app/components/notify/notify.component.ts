import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notify',
  template: ` <div class="notify" [ngClass]="data.type">
    <p>{{ data.name }}</p>
  </div>`,
  styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent {
  @Input() data!: any;
  @Input() errorType!: string;
  constructor() {}
}
