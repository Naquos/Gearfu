import { isPlatformBrowser } from '@angular/common';
import {
    Directive,
    ElementRef,
    PLATFORM_ID,
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


    private readonly platformId = inject(PLATFORM_ID);

    replay(): void {

        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const element = this.el.nativeElement;

        this.renderer.removeClass(element, this.cssClass);

        void element.offsetWidth;
        requestAnimationFrame(() => {
            this.renderer.addClass(element, this.cssClass);
        });
    }
}