import { ConnectedPosition, Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentRef, Injectable, ViewContainerRef } from "@angular/core";
import { ComponentPortal, ComponentType } from "@angular/cdk/portal";

@Injectable({providedIn: 'root'})
export class TooltipService<T extends Record<string, any>> {
    
    private overlayRef: OverlayRef | null = null;
    constructor(private overlay: Overlay) {}

    

    closeTooltip(): void {
        this.overlayRef?.dispose();
        this.overlayRef = null;
      }

    openTooltip(viewContainerRef: ViewContainerRef, component: ComponentType<T>, event: MouseEvent, value: Record<string, any>, connectedPostion?: ConnectedPosition[], withPush = true): void {
        this.closeTooltip();
        let position = connectedPostion;
        if(!position) {
          position = [{ 
            originX: 'center', originY: 'top',
            overlayX: 'center', overlayY: 'bottom',
            offsetY: 80
           }]
        }

        if (!this.overlayRef) {
          const positionStrategy = this.overlay.position()
            .flexibleConnectedTo(event.target as HTMLElement) // Position selon la souris
            .withPositions(position)
            .withPush(withPush);
    
          this.overlayRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: false,
            panelClass:"no-max-width",
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
          });
    
          
          const tooltipPortal = new ComponentPortal<T>(component, viewContainerRef);
          const tooltipRef: ComponentRef<T> = this.overlayRef.attach(tooltipPortal);

          if(tooltipRef.instance) {
            Object.assign(tooltipRef.instance, value);
          }

        }
      }
}