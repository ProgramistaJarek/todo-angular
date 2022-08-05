import { DatePipe } from '@angular/common';
import {
  Directive,
  OnDestroy,
  HostListener,
  ElementRef,
  Input,
} from '@angular/core';
import { Todos } from '../../Todos';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input() appTooltip!: Todos;

  private tooltip!: HTMLElement;
  private timer: any;

  constructor(private el: ElementRef, private datePipe: DatePipe) {}

  ngOnDestroy(): void {
    if (this.tooltip) {
      this.tooltip.remove();
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appTooltip.done && this.appTooltip.doneCreated) {
      this.timer = setTimeout(() => {
        let x =
          this.el.nativeElement.getBoundingClientRect().left +
          this.el.nativeElement.offsetWidth / 2;
        let y =
          this.el.nativeElement.getBoundingClientRect().top +
          this.el.nativeElement.offsetHeight +
          6;
        this.createTooltip(x, y);
      }, 100);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.timer) clearTimeout(this.timer);
    if (this.tooltip) {
      this.tooltip.remove();
    }
  }

  createTooltip(x: number, y: number) {
    let popup = document.createElement('div');
    popup.innerHTML =
      'Zadanie wykonano ' + this.changeDate(this.appTooltip.doneCreated!);
    popup.setAttribute('class', 'tooltip-container');
    popup.style.top = y.toString() + 'px';
    popup.style.left = x.toString() + 'px';
    document.body.appendChild(popup);
    this.tooltip = popup;
    setTimeout(() => {
      if (this.tooltip) this.tooltip.remove();
    }, 2000);
  }

  changeDate(date: Date): string {
    return this.datePipe
      .transform(this.appTooltip.doneCreated, 'MMM d, y, h:mm:ss a')!
      .toString();
  }
}
