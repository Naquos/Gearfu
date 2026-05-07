import { Directive, ElementRef, inject, input, output } from '@angular/core';

@Directive({
  selector: '[appActivate]',
  standalone: true,
  host: {
    'tabindex': '0',
    '(keydown)': 'onKeyDown($event)',
    '(click)': 'onClick($event)',
    '(dblclick)': 'onDblClick($event)',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})
export class ActivateDirective {
  appActivate = output<Event>();
  appActivateTrigger = input<'click' | 'dblclick'>('click');

  private readonly keyList: string[] = [' ', 'Spacebar', 'Enter'];
  private readonly el = inject(ElementRef);

  onKeyDown(event: KeyboardEvent): void {
    if (this.keyList.includes(event.key)) {
      event.preventDefault();
      this.appActivate.emit(event);
    }
  }

  onClick(event: MouseEvent): void {
    if (this.appActivateTrigger() === 'click') {
      this.appActivate.emit(event);
    }
  }

  onDblClick(event: MouseEvent): void {
    if (this.appActivateTrigger() === 'dblclick') {
      this.appActivate.emit(event);
    }
  }

  onFocus(): void {
    const parent = this.el.nativeElement.parentElement;
    if (parent) {
      // this.renderer.setStyle(parent, 'outline', '3px solid #4A90E2');
      // this.renderer.setStyle(parent, 'outline-offset', '2px');
      // this.renderer.setStyle(parent, 'box-shadow', '0 0 0 4px rgba(74, 144, 226, 0.3), 2px 3px 2px rgba(240, 240, 240, 0.2)');
    }
  }

  onBlur(): void {
    const parent = this.el.nativeElement.parentElement;
    if (parent) {
      // this.renderer.removeStyle(parent, 'outline');
      // this.renderer.removeStyle(parent, 'outline-offset');
      // this.renderer.removeStyle(parent, 'box-shadow');
    }
  }
}
