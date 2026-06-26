import {
    Directive,
    ElementRef,
    HostListener,
    Renderer2
} from '@angular/core';

@Directive({
    selector: '[appRipple]',
    standalone: true
})
export class RippleDirective {

    constructor(
        private readonly elementRef: ElementRef<HTMLElement>,
        private readonly renderer: Renderer2
    ) {
        const element = this.elementRef.nativeElement;

        this.renderer.setStyle(element, 'position', 'relative');
        this.renderer.setStyle(element, 'overflow', 'hidden');
    }

    @HostListener('pointerdown', ['$event'])
    onPointerDown(event: PointerEvent): void {

        const element = this.elementRef.nativeElement;

        const rect = element.getBoundingClientRect();

        const diameter = Math.max(rect.width, rect.height);

        const radius = diameter / 2;

        const ripple = this.renderer.createElement('span');

        this.renderer.addClass(ripple, 'app-ripple');

        this.renderer.setStyle(ripple, 'width', `${diameter}px`);
        this.renderer.setStyle(ripple, 'height', `${diameter}px`);

        this.renderer.setStyle(
            ripple,
            'left',
            `${event.clientX - rect.left - radius}px`
        );

        this.renderer.setStyle(
            ripple,
            'top',
            `${event.clientY - rect.top - radius}px`
        );

        this.renderer.appendChild(element, ripple);

        ripple.addEventListener('animationend', () => {
            this.renderer.removeChild(element, ripple);
        });
    }
}