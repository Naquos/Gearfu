export interface FlyToTargetOptions {

    source: HTMLElement;

    target: HTMLElement;

    /**
     * Si renseigné, l'animation partira du clic de souris
     * plutôt que du centre de l'élément.
     */
    mouseEvent?: MouseEvent;

    duration?: number;

    scale?: number;

    rotation?: number;

    easing?: string;

    /**
     * Hauteur de la courbe.
     * Plus la valeur est grande, plus l'arc est prononcé.
     */
    arcHeight?: number;
}