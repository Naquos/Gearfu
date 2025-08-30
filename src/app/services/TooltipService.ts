import { ConnectedPosition, Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentRef, inject, Injectable, ViewContainerRef } from "@angular/core";
import { ComponentPortal, ComponentType } from "@angular/cdk/portal";

@Injectable({providedIn: 'root'})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class TooltipService<T extends Record<string, any>> {
    private readonly overlay: Overlay = inject(Overlay);

    private overlayRefs: OverlayRef[] = [];

    closeTooltip(): void {
        this.overlayRefs.forEach(ref => ref.dispose());
        this.overlayRefs = [];
      }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    openTooltip(viewContainerRef: ViewContainerRef, component: ComponentType<T>, event: MouseEvent, value: Record<string, any>, connectedPostion?: ConnectedPosition[], withPush = true): OverlayRef {
      let position = connectedPostion;
      if(!position) {
        position = [{ 
          originX: 'center', originY: 'top',
          overlayX: 'center', overlayY: 'bottom',
          offsetY: 80
          }]
      }

      const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(event.target as HTMLElement) // Position selon la souris
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

      this.overlayRefs.push(overlayRef);
      return overlayRef;
    }
}