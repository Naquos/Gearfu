import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { LazyImageDirective } from '../../../directives/lazy-image.directive';
import { ImageService } from '../../../services/imageService';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import { SpellEffectService } from '../../../services/spellEffectService';
import { SortSelectionService } from '../../../services/form/sortSelectionService';
import { RecapStatsService } from '../../../services/recapStatsService';
import { ActivateDirective } from '../../../directives/activate.directive';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { DescriptionSort } from '../../../models/data/descriptionSort';

@Component({
    selector: 'app-selected-sort',
    imports: [CommonModule, TranslateModule, MatButtonModule, FormsModule, MatSliderModule, LazyImageDirective, ActivateDirective],
    templateUrl: './selected-sort.component.html',
    styleUrl: './selected-sort.component.scss'
})
export class SelectedSortComponent {
    private readonly translateService = inject(TranslateService);
    private readonly sanitizer = inject(DomSanitizer);
    private readonly spellEffectService = inject(SpellEffectService);
    private readonly sortSelectionService = inject(SortSelectionService);
    private readonly recapStatsService = inject(RecapStatsService);

    protected readonly imageService = inject(ImageService);
    protected readonly IdActionsEnum = IdActionsEnum;

    protected readonly sortSelected = this.sortSelectionService.sortSelected;
    protected readonly effectDisplay = this.sortSelectionService.effectDisplay;
    protected readonly spellLevel = this.sortSelectionService.spellLevel;

    protected readonly PO = toSignal(this.recapStatsService.recap$.pipe(
        map(x => x.filter(x => x.id === IdActionsEnum.PORTEE)[0]),
        filter(x => x !== undefined),
        map(x => x.value)
    ), {
        initialValue: 0
    });

    protected sortPOMaximale(): number {
        const poMinSelected = this.sortSelected()?.PorteeMin || 0;
        const poMaxSelected = this.sortSelected()?.PorteeMax || 0;
        const poModifiable = this.sortSelected()?.POModifiable ? this.PO() : 0;
        return Math.max(poMaxSelected + poModifiable, poMinSelected);
    }

    protected getSortName(sort: DescriptionSort): string {
        return sort.name[this.translateService.currentLang as keyof typeof sort.name];
    }

    protected getSortDescription(sort: DescriptionSort): string {
        return sort.description[this.translateService.currentLang as keyof typeof sort.description];
    }

    protected displayLevelSelector(): (value: number) => string {
        return (value: number) => `${value - 1}`;
    }

    protected getEffect(): SafeHtml[] {
        if (!this.sortSelected()) {
            return [];
        }

        const sort = this.sortSelected()!;
        const lang = this.translateService.currentLang as 'fr' | 'en' | 'es' | 'pt';
        const level = this.spellLevel() - 1;

        const isNormal = this.effectDisplay() === 'NORMAL';
        const template = isNormal ? sort.effect_normal[lang] : sort.effect_critical[lang];
        const rleData = isNormal ? sort.normalEffect[lang] : sort.criticalEffect[lang];

        if (!rleData || rleData.length === 0) {
            const lines = template.split('\n').map(x => x.charAt(0).toUpperCase() + x.slice(1)) || [];
            return lines.map(line => this.sanitizer.bypassSecurityTrustHtml(line));
        }

        const formattedEffect = this.spellEffectService.getFormattedEffect(template, rleData, level);
        const lines = formattedEffect.split('\n').map(x => x.charAt(0).toUpperCase() + x.slice(1)) || [];
        return lines.map(line => this.sanitizer.bypassSecurityTrustHtml(line));
    }

    protected setEffectDisplay(display: 'NORMAL' | 'CRITIQUE'): void {
        this.sortSelectionService.setEffectDisplay(display);
    }

    protected updateSpellLevel(level: number): void {
        this.sortSelectionService.setSpellLevel(level);
    }
}
