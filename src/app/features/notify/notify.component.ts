import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notify',
  template: ` <p [ngClass]="data.type">{{ data.name }}</p> `,
  styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent {
  @Input() data!: any;
  constructor() {}
}
