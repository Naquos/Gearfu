import { Component, inject, ViewContainerRef } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { ChasseFormService } from '../../../services/form/chasseFormService';
import { toSignal } from '@angular/core/rxjs-interop';
import { ItemTypeEnum } from '../../../models/enum/itemTypeEnum';
import { ImageItemComponent } from '../image-item/image-item.component';
import { Chasse } from '../../../models/data/chasse';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { map, takeUntil } from 'rxjs';
import { Sublimation } from '../../../models/data/sublimation';
import { SublimationsEpiqueRelique } from '../../../models/data/sublimationEpiqueRelique';
import { SublimationsDescriptions } from '../../../models/data/sublimationsDescriptions';
import { TooltipService } from '../../../services/TooltipService';
import { DescriptionSublimationComponent, DescriptionSublimationType } from '../description-sublimation/description-sublimation.component';
import { LevelFormService } from '../../../services/form/levelFormService';
import { maxChasseLevel } from '../../../models/utils/utils';
import { AbstractDestroyService } from '../../../services/abstract/abstractDestroyService';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { FormatNumberPipe } from '../../../pipe/formatNumber/formatNumber.pipe';
import { ActivateDirective } from '../../../directives/activate.directive';
import { MatTooltip } from '@angular/material/tooltip';
import { EnchantementStateService, EffetDescription } from '../../../services/form/enchantementStateService';
import { SublimationService } from '../../../services/data/sublimationService';

interface DisplayTypeItem {
    indexItem: number;
    itemType: ItemTypeEnum;
    background: string;
}

@Component({
    selector: 'app-enchantement-chasses',
    imports: [ImageItemComponent, TranslateModule, MatSliderModule, FormsModule, FormatNumberPipe, ActivateDirective, MatTooltip],
    templateUrl: './enchantement-chasses.component.html',
    styleUrl: './enchantement-chasses.component.scss'
})
export class EnchantementChassesComponent extends AbstractDestroyService {

    private readonly sublimationService = inject(SublimationService);
    private readonly translateService = inject(TranslateService);
    private readonly tooltipService = inject(TooltipService<DescriptionSublimationType>);
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly levelFormService = inject(LevelFormService);
    private itemLevels = new Map<number, number>();

    protected readonly imageService = inject(ImageService);
    protected readonly chasseFormService = inject(ChasseFormService);
    protected readonly stateService = inject(EnchantementStateService);
    protected readonly chasses = toSignal(this.chasseFormService.enchantement$.pipe(
        map(enchantement => enchantement.chasseCombinaison)
    ));
    protected readonly enchantement = toSignal(this.chasseFormService.enchantement$);
    protected readonly coutEclatTotal = toSignal(this.chasseFormService.coutEclatTotal$, { initialValue: 0 });
    protected readonly ItemTypeEnum = ItemTypeEnum;
    protected level = 11;
    protected maxLevel = 11;

    constructor() {
        super();
        this.levelFormService.level$.pipe(takeUntil(this.destroy$)).subscribe(level => {
            this.maxLevel = maxChasseLevel(level);
            this.level = Math.max(this.level, this.maxLevel);
        });
    }

    protected readonly displayTypeItem: DisplayTypeItem[] = [
        { indexItem: 0, itemType: ItemTypeEnum.CASQUE, background: './aptitudes/EmplacementCoiffe.png' },
        { indexItem: 0, itemType: ItemTypeEnum.AMULETTE, background: './aptitudes/EmplacementAmulette.png' },
        { indexItem: 0, itemType: ItemTypeEnum.PLASTRON, background: './aptitudes/EmplacementPlastron.png' },
        { indexItem: 0, itemType: ItemTypeEnum.ANNEAU, background: './aptitudes/EmplacementAnneauGauche.png' },
        { indexItem: 1, itemType: ItemTypeEnum.ANNEAU, background: './aptitudes/EmplacementAnneauDroite.png' },
        { indexItem: 0, itemType: ItemTypeEnum.BOTTES, background: './aptitudes/EmplacementBottes.png' },
        { indexItem: 0, itemType: ItemTypeEnum.CAPE, background: './aptitudes/EmplacementCape.png' },
        { indexItem: 0, itemType: ItemTypeEnum.EPAULETTES, background: './aptitudes/EmplacementEpaulettes.png' },
        { indexItem: 0, itemType: ItemTypeEnum.CEINTURE, background: './aptitudes/EmplacementCeinture.png' },
        { indexItem: 0, itemType: ItemTypeEnum.UNE_MAIN, background: './aptitudes/EmplacementPremièreMain.png' },
    ];

    protected openTooltip(event: MouseEvent, sublimationDescriptions: SublimationsDescriptions | Sublimation | SublimationsEpiqueRelique | undefined, level: number): void {
        if (!sublimationDescriptions) {
            return;
        }
        let description = sublimationDescriptions;
        if ('isValid' in description || 'epique' in description) {
            description = this.sublimationService.getSublimationById(sublimationDescriptions.id)!;
        }
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
            { sublimationsDescriptions: description, level },
            connectedPosition,
            true,
            true
        );
    }

    protected onMouseLeave(): void {
        this.tooltipService.closeTooltip();
    }

    protected tooltipChasse(chasse: Chasse, itemType: ItemTypeEnum): string {
        if (!chasse.idAction) {
            return "";
        }
        const effetDescription = this.stateService.effetsDescription.find(effet => effet.chasse.idAction === chasse.idAction);
        const traduction = effetDescription ? this.translateService.instant(effetDescription.libelle) : "";
        return `${this.chasseFormService.valueChasse(chasse, itemType)} - ${traduction}`;
    }

    protected applySublimation(posY: number): void {
        const sublimationToApply = this.stateService.sublimationToApply();
        if (!sublimationToApply) {
            this.chasseFormService.removeSublimation(posY);
            return;
        }
        if (sublimationToApply.isEpic || sublimationToApply.isRelic) {
            return;
        }
        this.chasseFormService.applySumblimation(posY, {
            id: sublimationToApply.id,
            title: sublimationToApply.title,
            slotColorPattern: sublimationToApply.slotColorPattern,
            isValid: false,
            level: this.stateService.levelSublimationToApply() || 1
        });
    }

    protected nameSublimation(sublimation: Sublimation | undefined): string {
        if (!sublimation) {
            return "";
        }
        const levelSublimation = sublimation.level === 1 ? "I" : sublimation.level === 2 ? "II" : sublimation.level === 3 ? "III" : "";
        return `${sublimation.title[this.translateService.currentLang as keyof typeof sublimation.title]} ${levelSublimation} `;
    }

    protected nameSublimationEpicRelic(sublimation: SublimationsEpiqueRelique | undefined): string {
        if (!sublimation) {
            return "";
        }
        return sublimation.title[this.translateService.currentLang as keyof typeof sublimation.title];
    }

    protected applyEffet(posX: number, posY: number, levelItem: number): void {
        const effectToApply = this.stateService.effectToApply();
        if (!effectToApply) {
            return;
        }
        this.chasseFormService.applyEffect(posX, posY, {
            color: effectToApply.chasse.color,
            lvl: Math.min(this.level, maxChasseLevel(levelItem)),
            idAction: effectToApply.chasse.idAction,
            joker: false
        });
    }

    protected changeJokerState(posX: number, posY: number): void {
        this.chasseFormService.changeJokerState(posX, posY);
    }

    protected cursorDestructStyle(chasse: Chasse, effetToApply: EffetDescription | undefined): string {
        const currentChasses = effetToApply?.chasse;
        if (!currentChasses || !this.equalChasses(chasse, currentChasses)) {
            return '';
        }
        return `url(cursor/chasses/destructShard.png) 16 16, auto`;
    }

    private equalChasses(c1: Chasse, c2: Chasse): boolean {
        return c1.color === c2.color && c1.lvl === c2.lvl && c1.idAction === c2.idAction;
    }

    protected setLevelItem(level: number, index: number): void {
        this.itemLevels.set(index, level);
    }

    protected getLevelItem(index: number): number {
        return this.itemLevels.get(index) || 0;
    }
}
