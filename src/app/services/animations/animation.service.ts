import {
    inject,
    Injectable,
    NgZone
} from '@angular/core';
import { FlyToTargetOptions } from '../../models/animations/animation.types';
import { InteractionService } from './interaction.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AnimationService {

    private readonly ngZone = inject(NgZone);
    private readonly interactionService = inject(InteractionService);
    private readonly listAnimationVersion = new BehaviorSubject<number>(0);
    public readonly listAnimationVersion$ = this.listAnimationVersion.asObservable();

    public incrementListAnimationVersion(): void {
        this.listAnimationVersion.next(this.listAnimationVersion.value + 1);
    }

    flyToTarget(options: FlyToTargetOptions): Promise<void> {

        return this.ngZone.runOutsideAngular(() => {

            return new Promise(resolve => {

                const {

                    source,
                    target,

                    duration = 1000,

                    scale = 0.55,

                    rotation = 180,

                    arcHeight = 120

                } = options;

                const sourceRect = source.getBoundingClientRect();
                const targetRect = target.getBoundingClientRect();

                const clone = source.cloneNode(true) as HTMLElement;

                clone.style.position = 'fixed';
                clone.style.margin = '0';
                clone.style.pointerEvents = 'none';
                clone.style.left = '0';
                clone.style.top = '0';
                clone.style.width = `${sourceRect.width}px`;
                clone.style.height = `${sourceRect.height}px`;
                clone.style.zIndex = '999999';
                clone.style.willChange = 'transform';
                clone.style.transformOrigin = 'center';

                document.body.appendChild(clone);

                const interaction = this.interactionService.lastInteraction;

                const startX = interaction
                    ? interaction.x - sourceRect.width / 2
                    : sourceRect.left;

                const startY = interaction
                    ? interaction.y - sourceRect.height / 2
                    : sourceRect.top;

                const endX =
                    targetRect.left +
                    targetRect.width / 2 -
                    sourceRect.width / 2;

                const endY =
                    targetRect.top +
                    targetRect.height / 2 -
                    sourceRect.height / 2;

                const controlX =
                    (startX + endX) / 2;

                const controlY =
                    Math.min(startY, endY) - arcHeight;

                const start = performance.now();

                const animate = (time: number) => {

                    const elapsed = time - start;

                    const progress = Math.min(elapsed / duration, 1);

                    // easing cubic
                    const t = 1 - Math.pow(1 - progress, 3);

                    const x =
                        (1 - t) * (1 - t) * startX +
                        2 * (1 - t) * t * controlX +
                        t * t * endX;

                    const y =
                        (1 - t) * (1 - t) * startY +
                        2 * (1 - t) * t * controlY +
                        t * t * endY;

                    const currentScale =
                        1 - (1 - scale) * t;

                    const currentRotation =
                        rotation * t;

                    clone.style.transform =
                        `translate(${x}px, ${y}px)
                         scale(${currentScale})
                         rotate(${currentRotation}deg)`;

                    clone.style.opacity =
                        `${1 - t * 0.25}`;

                    if (progress < 1) {

                        requestAnimationFrame(animate);

                    } else {

                        clone.remove();

                        resolve();

                    }

                };

                requestAnimationFrame(animate);

            });

        });

    }

}