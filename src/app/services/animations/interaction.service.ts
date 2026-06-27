import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface LastInteraction {

    x: number;

    y: number;

    timestamp: number;

    target: EventTarget | null;

}

@Injectable({
    providedIn: 'root'
})
export class InteractionService {

    private readonly document = inject(DOCUMENT);

    private _lastInteraction: LastInteraction | null = null;

    constructor() {

        this.document.addEventListener(
            'pointerdown',
            this.onPointerDown,
            { passive: true }
        );

    }

    public get lastInteraction(): LastInteraction | null {

        return this._lastInteraction;

    }

    private readonly onPointerDown = (event: PointerEvent): void => {

        this._lastInteraction = {

            x: event.clientX,

            y: event.clientY,

            timestamp: performance.now(),

            target: event.target

        };

    };

}