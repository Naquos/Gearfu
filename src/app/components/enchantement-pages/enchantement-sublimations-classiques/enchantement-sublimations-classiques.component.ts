import { Component, ViewContainerRef, computed, inject, input } from '@angular/core';
import { SublimationsDescriptions } from '../../../models/data/sublimationsDescriptions';
import { ImageService } from '../../../services/imageService';
import { ActivateDirective } from '../../../directives/activate.directive';
import { EnchantementStateService } from '../../../services/form/enchantementStateService';
import { TranslateService } from '@ngx-translate/core';
import { TooltipService } from '../../../services/TooltipService';
import { DescriptionSublimationComponent, DescriptionSublimationType } from '../description-sublimation/description-sublimation.component';
import { ConnectedPosition } from '@angular/cdk/overlay';

@Component({
    selector: 'app-enchantement-sublimations-classiques',
    imports: [ActivateDirective],
    templateUrl: './enchantement-sublimations-classiques.component.html',
    styleUrl: './enchantement-sublimations-classiques.component.scss'
})
export class EnchantementSublimationsClassiquesComponent {

    protected readonly imageService = inject(ImageService);
    protected readonly stateService = inject(EnchantementStateService);
    private readonly translateService = inject(TranslateService);
    private readonly tooltipService = inject(TooltipService<DescriptionSublimationType>);
    private readonly viewContainerRef = inject(ViewContainerRef);

    readonly sublimation = input.required<SublimationsDescriptions>();

    protected readonly displayName = computed(() =>
        this.sublimation().title[this.translateService.currentLang as keyof SublimationsDescriptions['title']]
    );

    protected readonly isSelected = computed(() => {
        const selected = this.stateService.sublimationToApply();
        return !!selected && selected.id === this.sublimation().id;
    });

    protected readonly selectedLevel = computed(() => this.stateService.levelSublimationToApply());

    protected onChooseSublimation(level: number): void {
        this.stateService.chooseSublimation(this.sublimation(), level);
    }

    protected onTooltipEnter(event: MouseEvent, level: number): void {
        this.tooltipService.forceClose();

        let connectedPosition: ConnectedPosition[] = [{
            originX: 'end', originY: 'top',
            overlayX: 'end', overlayY: 'bottom',
            offsetY: -10
        }];
        if (window.innerWidth <= 700) {
            connectedPosition = [{
                originX: 'start', originY: 'bottom',
                overlayX: 'start', overlayY: 'bottom',
                offsetY: 0, offsetX: 0
            }] as ConnectedPosition[];
        }

        this.tooltipService.cancelClose();
        this.tooltipService.openTooltip(
            this.viewContainerRef,
            DescriptionSublimationComponent,
            event,
            { sublimationsDescriptions: this.sublimation(), level },
            connectedPosition,
            true,
            true
        );
    }

    protected onTooltipLeave(): void {
        this.tooltipService.closeTooltip();
    }
}
