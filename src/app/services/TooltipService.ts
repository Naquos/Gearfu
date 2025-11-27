import { ConnectedPosition, Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentRef, inject, Injectable, ViewContainerRef } from "@angular/core";
import { ComponentPortal, ComponentType } from "@angular/cdk/portal";
import { Subject, timer } from "rxjs";
import { switchMap, takeUntil } from "rxjs/operators";

@Injectable({providedIn: 'root'})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class TooltipService<T extends Record<string, any>> {
    private readonly overlay: Overlay = inject(Overlay);

    private overlayRefs: OverlayRef[] = [];
    private mouseEnter$ = new Subject<void>();
    private mouseLeave$ = new Subject<void>();
    private destroy$ = new Subject<void>();
    private keepOpenOnHover = false;

    constructor() {
        // Gérer la fermeture avec RxJS
        this.mouseLeave$.pipe(
            switchMap(() => {
                // Si keepOpenOnHover est false, fermer immédiatement
                const delay = this.keepOpenOnHover ? 100 : 0;
                return timer(delay).pipe(
                    takeUntil(this.mouseEnter$),
                    takeUntil(this.destroy$)
                );
            })
        ).subscribe(() => {
            this.forceClose();
        });
    }

    closeTooltip(): void {
        this.mouseLeave$.next();
    }

    cancelClose(): void {
        this.mouseEnter$.next();
    }

    forceClose(): void {
        this.overlayRefs.forEach(ref => ref.dispose());
        this.overlayRefs = [];
        this.keepOpenOnHover = false;
    }

    openTooltip(
        viewContainerRef: ViewContainerRef, 
        component: ComponentType<T>, 
        event: MouseEvent, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value: Record<string, any>, 
        connectedPostion?: ConnectedPosition[], 
        withPush = true,
        keepOpenOnHover = false
    ): OverlayRef {
      this.cancelClose();
      this.keepOpenOnHover = keepOpenOnHover;
      
      let position = connectedPostion;
      if(!position) {
        position = [{ 
          originX: 'center', originY: 'top',
          overlayX: 'center', overlayY: 'bottom',
          offsetY: 80
          }]
      }

      const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(event.target as HTMLElement)
        .withPositions(position)
        .withPush(withPush);

      const overlayRef = this.overlay.create({
        positionStrategy,
        hasBackdrop: false,
        panelClass:"no-max-width",
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
      });

      const tooltipPortal = new ComponentPortal<T>(component, viewContainerRef);
      const tooltipRef: ComponentRef<T> = overlayRef.attach(tooltipPortal);

      if(tooltipRef.instance) {
        Object.assign(tooltipRef.instance, value);
      }

      // Ajouter les listeners seulement si keepOpenOnHover est true
      if (keepOpenOnHover) {
        const tooltipElement = overlayRef.overlayElement;
        
        const tooltipMouseEnter$ = new Subject<void>();
        const tooltipMouseLeave$ = new Subject<void>();

        tooltipElement.addEventListener('mouseenter', () => {
          tooltipMouseEnter$.next();
          this.cancelClose();
        });

        tooltipElement.addEventListener('mouseleave', () => {
          tooltipMouseLeave$.next();
          this.closeTooltip();
        });

        // Nettoyer les observables quand l'overlay est détruit
        overlayRef.detachments().subscribe(() => {
          tooltipMouseEnter$.complete();
          tooltipMouseLeave$.complete();
        });
      }

      this.overlayRefs.push(overlayRef);
      return overlayRef;
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
        this.mouseEnter$.complete();
        this.mouseLeave$.complete();
        this.forceClose();
    }
}