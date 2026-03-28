import { Component, computed, inject, signal } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { ChasseFormService } from '../../../services/form/chasseFormService';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { map } from 'rxjs';
import { SublimationsDescriptions } from '../../../models/data/sublimationsDescriptions';
import { SublimationService } from '../../../services/data/sublimationService';
import { normalizeString } from '../../../models/utils/utils';
import { EnchantementStateService } from '../../../services/form/enchantementStateService';
import { FormsModule } from '@angular/forms';
import { EnchantementSublimationsClassiquesComponent } from '../enchantement-sublimations-classiques/enchantement-sublimations-classiques.component';
import { EnchantementSublimationsEpiquesReliquesComponent } from '../enchantement-sublimations-epiques-reliques/enchantement-sublimations-epiques-reliques.component';

@Component({
    selector: 'app-enchantement-sublimations',
    imports: [
        TranslateModule,
        MatInputModule,
        FormsModule,
        EnchantementSublimationsClassiquesComponent,
        EnchantementSublimationsEpiquesReliquesComponent
    ],
    templateUrl: './enchantement-sublimations.component.html',
    styleUrl: './enchantement-sublimations.component.scss'
})
export class EnchantementSublimationsComponent {

    private readonly sublimationService = inject(SublimationService);
    private readonly translateService = inject(TranslateService);
    private readonly chasseFormService = inject(ChasseFormService);

    protected readonly imageService = inject(ImageService);
    protected readonly stateService = inject(EnchantementStateService);
    protected searchSubli = signal("");

    private readonly chasses = toSignal(this.chasseFormService.enchantement$.pipe(
        map(enchantement => enchantement.chasseCombinaison)
    ));
    private readonly sublimations = signal(this.sublimationService.getSublimations());
    private readonly sublimationsEpiqueRelique = signal(this.sublimationService.getSublimationsEpiqueRelique());

    protected readonly sublimationsList = computed(() => {
        this.chasses();
        const search = normalizeString(this.searchSubli());
        return this.sublimations()?.filter(subli =>
            normalizeString(this.nameItem(subli)).includes(search) ||
            normalizeString(this.descriptionSublimation(subli)).includes(search)
        ).filter(x =>
            this.stateService.indexItemTypeSelected() === -1 ||
            this.chasseFormService.canApplySublimationWithItem(this.chasses()![this.stateService.indexItemTypeSelected()], x)
        );
    });

    protected readonly sublimationsEpiqueReliqueList = computed(() => {
        const search = normalizeString(this.searchSubli());
        return this.sublimationsEpiqueRelique()?.filter(subli =>
            normalizeString(this.nameItem(subli)).includes(search) ||
            normalizeString(this.descriptionSublimation(subli)).includes(search)
        );
    });

    private nameItem(sublimation: SublimationsDescriptions | undefined): string {
        if (!sublimation) {
            return "";
        }
        return sublimation.title[this.translateService.currentLang as keyof typeof sublimation.title];
    }

    private descriptionSublimation(sublimation: SublimationsDescriptions | undefined): string {
        if (!sublimation) {
            return "";
        }
        return sublimation.description[this.translateService.currentLang as keyof typeof sublimation.description];
    }
}
