import {
    Directive,
    ElementRef,
    Renderer2,
    inject
} from '@angular/core';

@Directive({
    selector: '[appReplayAnimation]',
    exportAs: 'replayAnimation'
})
export class ReplayAnimationDirective {

    private readonly el = inject(ElementRef<HTMLElement>);
    private readonly renderer = inject(Renderer2);

    private readonly cssClass = 'item-appear';

    replay(): void {
        const element = this.el.nativeElement;

        this.renderer.removeClass(element, this.cssClass);

        void element.offsetWidth;
        requestAnimationFrame(() => {
            this.renderer.addClass(element, this.cssClass);
        });
    }
}