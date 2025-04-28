import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[appSwipe]',
})
export class SwipeDirective {

  private static readonly MINIMUM_MOOVE = 100;

  private startX = 0;
  private startY = 0;

  public readonly swipeLeft = output<void>();
  public readonly swipeRight = output<void>();
  public readonly swipeUp = output<void>();
  public readonly swipeDown = output<void>();
  

  @HostListener('touchstart', ['$event']) onTouchStart(event: TouchEvent) {
    const touch = event.changedTouches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
  }

  @HostListener('touchend', ['$event']) onTouchEnd(event: TouchEvent) {
    const touch = event.changedTouches[0];
    const endX = touch.clientX;
    const endY = touch.clientY;

    if(endX - this.startX >= SwipeDirective.MINIMUM_MOOVE) {
      this.swipeRight.emit();
    } else if (this.startX - endX >= SwipeDirective.MINIMUM_MOOVE) {
      this.swipeLeft.emit();
    }
    
    if(endY - this.startY >= SwipeDirective.MINIMUM_MOOVE) {
      this.swipeDown.emit();
    } else if (this.startX - endX >= SwipeDirective.MINIMUM_MOOVE) {
      this.swipeUp.emit();
    }
  }
}
