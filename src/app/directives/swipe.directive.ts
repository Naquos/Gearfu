import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[appSwipe]',
})
export class SwipeDirective {

  private minimumMoove = 50;

  private startX = 0;
  private startY = 0;

  public swipeLeft = output<void>();
  public swipeRight = output<void>();
  public swipeUp = output<void>();
  public swipeDown = output<void>();
  

  @HostListener('touchstart', ['$event']) onTouchStart(event: TouchEvent) {
    const touch = event.changedTouches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
  }

  @HostListener('touchend', ['$event']) onTouchEnd(event: TouchEvent) {
    const touch = event.changedTouches[0];
    const endX = touch.clientX;
    const endY = touch.clientY;

    if(endX - this.startX >= this.minimumMoove) {
      this.swipeRight.emit();
    } else if (this.startX - endX >= this.minimumMoove) {
      this.swipeLeft.emit();
    }
    
    if(endY - this.startY >= this.minimumMoove) {
      this.swipeDown.emit();
    } else if (this.startX - endX >= this.minimumMoove) {
      this.swipeUp.emit();
    }
  }
}
