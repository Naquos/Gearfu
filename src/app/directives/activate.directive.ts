import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appActivate]',
  standalone: true
})
export class ActivateDirective {
  @Output() appActivate = new EventEmitter<Event>();
  @Input() appActivateTrigger: 'click' | 'dblclick' = 'click';
  @HostBinding('tabIndex') tabIndex = 0;

  private readonly keyList: string[] = [' ', 'Spacebar', 'Enter'];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.keyList.includes(event.key)) {
      event.preventDefault();
      this.appActivate.emit(event);
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.appActivateTrigger === 'click') {
      this.appActivate.emit(event);
    }
  }

  @HostListener('dblclick', ['$event'])
  onDblClick(event: MouseEvent): void {
    if (this.appActivateTrigger === 'dblclick') {
      this.appActivate.emit(event);
    }
  }

  @HostListener('focus')
  onFocus(): void {
    const parent = this.el.nativeElement.parentElement;
    if (parent) {
      // this.renderer.setStyle(parent, 'outline', '3px solid #4A90E2');
      // this.renderer.setStyle(parent, 'outline-offset', '2px');
      // this.renderer.setStyle(parent, 'box-shadow', '0 0 0 4px rgba(74, 144, 226, 0.3), 2px 3px 2px rgba(240, 240, 240, 0.2)');
    }
  }

  @HostListener('blur')
  onBlur(): void {
    const parent = this.el.nativeElement.parentElement;
    if (parent) {
      // this.renderer.removeStyle(parent, 'outline');
      // this.renderer.removeStyle(parent, 'outline-offset');
      // this.renderer.removeStyle(parent, 'box-shadow');
    }
  }
}
