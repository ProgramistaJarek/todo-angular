import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNotify]',
})
export class NotifyDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
