import { Component, computed, inject } from '@angular/core';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import { AptitudesFormService } from '../../../services/form/aptitudesFormService';
import { ImageService } from '../../../services/imageService';
import { TranslateModule } from '@ngx-translate/core';

interface RecapitulatifAptitudes {
  label: string;
  value: number;
  idAction: IdActionsEnum;
  armureDonnee?: boolean;
};

@Component({
  selector: 'app-recapitulatif-aptitudes',
  imports: [TranslateModule],
  templateUrl: './recapitulatif-aptitudes.component.html',
  styleUrl: './recapitulatif-aptitudes.component.scss',
})
export class RecapitulatifAptitudesComponent {

  private readonly aptitudesFormService = inject(AptitudesFormService);
  protected readonly imageService = inject(ImageService);

  protected readonly recapitulatifAptitudes = computed<RecapitulatifAptitudes[]>(() => [
    // Intelligence
    {
      label: 'aptitudes.%-vie',
      value: this.aptitudesFormService.form.value.percentagePV ?? 0,
      idAction: IdActionsEnum.PERCENTAGE_PV
    },
    {
      label: 'aptitudes.resistances-elem',
      value: this.aptitudesFormService.form.value.resistancesElementaires ?? 0,
      idAction: IdActionsEnum.RESISTANCES_ELEMENTAIRE
    },
    {
      label: 'aptitudes.barriere',
      value: this.aptitudesFormService.form.value.barriere ?? 0,
      idAction: IdActionsEnum.BARRIERE
    },
    {
      label: 'aptitudes.soins-recus',
      value: this.aptitudesFormService.form.value.soinsRecus ?? 0,
      idAction: IdActionsEnum.SOINS_RECUE
    },
    {
      label: 'aptitudes.%-armure',
      value: this.aptitudesFormService.form.value.pdvArmure ?? 0,
      idAction: IdActionsEnum.POINT_DE_VIE_EN_ARMURE
    },
    {
      label: 'aptitudes.%-armure',
      value: this.aptitudesFormService.form.value.pdvArmure ?? 0,
      idAction: IdActionsEnum.POINT_DE_VIE_EN_ARMURE
    },
    // Force
    {
      label: 'aptitudes.maitrises-elem',
      value: this.aptitudesFormService.form.value.maitriseElem ?? 0,
      idAction: IdActionsEnum.MAITRISES_ELEMENTAIRES
    },
    {
      label: 'aptitudes.maitrises-melee',
      value: this.aptitudesFormService.form.value.maitrisesMelee ?? 0,
      idAction: IdActionsEnum.MAITRISES_MELEE
    },
    {
      label: 'aptitudes.maitrises-distance',
      value: this.aptitudesFormService.form.value.maitrisesDistance ?? 0,
      idAction: IdActionsEnum.MAITRISES_DISTANCES
    },
    {
      label: 'aptitudes.vie',
      value: this.aptitudesFormService.form.value.pdv ?? 0,
      idAction: IdActionsEnum.POINT_DE_VIE
    },
    // Agilité
    {
      label: 'aptitudes.tacle',
      value: this.aptitudesFormService.form.value.tacle ?? 0,
      idAction: IdActionsEnum.TACLE
    },
    {
      label: 'aptitudes.esquive',
      value: this.aptitudesFormService.form.value.esquive ?? 0,
      idAction: IdActionsEnum.ESQUIVE
    },
    {
      label: 'aptitudes.initiative',
      value: this.aptitudesFormService.form.value.initiative ?? 0,
      idAction: IdActionsEnum.INITIATIVE
    },
    {
      label: 'aptitudes.tacle-esquive',
      value: this.aptitudesFormService.form.value.tacleEsquive ?? 0,
      idAction: IdActionsEnum.TACLE
    },
    {
      label: 'aptitudes.volonte',
      value: this.aptitudesFormService.form.value.volonte ?? 0,
      idAction: IdActionsEnum.VOLONTE
    },
    // Chance

    {
      label: 'aptitudes.%-critique',
      value: this.aptitudesFormService.form.value.percentageCC ?? 0,
      idAction: IdActionsEnum.COUP_CRITIQUE
    },
    {
      label: 'aptitudes.%-parade',
      value: this.aptitudesFormService.form.value.parade ?? 0,
      idAction: IdActionsEnum.PARADE
    },
    {
      label: 'aptitudes.maitrises-critique',
      value: this.aptitudesFormService.form.value.maitriseCritique ?? 0,
      idAction: IdActionsEnum.MAITRISES_CRITIQUES
    },
    {
      label: 'aptitudes.maitrises-dos',
      value: this.aptitudesFormService.form.value.maitriseDos ?? 0,
      idAction: IdActionsEnum.MAITRISES_DOS
    },
    {
      label: 'aptitudes.maitrises-berzerk',
      value: this.aptitudesFormService.form.value.maitriseBerzerk ?? 0,
      idAction: IdActionsEnum.MAITRISES_BERZERK
    },
    {
      label: 'aptitudes.maitrises-soin',
      value: this.aptitudesFormService.form.value.maitriseSoins ?? 0,
      idAction: IdActionsEnum.MAITRISES_SOIN
    },
    {
      label: 'aptitudes.resistances-dos',
      value: this.aptitudesFormService.form.value.resistancesDos ?? 0,
      idAction: IdActionsEnum.RESISTANCES_DOS
    },
    {
      label: 'aptitudes.resistances-critique',
      value: this.aptitudesFormService.form.value.resistancesCritique ?? 0,
      idAction: IdActionsEnum.RESISTANCES_CRITIQUES
    },
    // Majeur
    {
      label: 'aptitudes.pa',
      value: this.aptitudesFormService.form.value.pa ?? 0,
      idAction: IdActionsEnum.PA
    },
    {
      label: 'aptitudes.pm',
      value: this.aptitudesFormService.form.value.pm ?? 0,
      idAction: IdActionsEnum.PM
    },
    {
      label: 'aptitudes.po',
      value: this.aptitudesFormService.form.value.po ?? 0,
      idAction: IdActionsEnum.PORTEE
    },
    {
      label: 'aptitudes.pw',
      value: this.aptitudesFormService.form.value.pw ?? 0,
      idAction: IdActionsEnum.PW
    },
    {
      label: 'aptitudes.armure-recue',
      value: this.aptitudesFormService.form.value.armureDonnee ?? 0,
      idAction: IdActionsEnum.ARMURE_DONNEE_RECUE,
      armureDonnee: true
    },
    {
      label: 'aptitudes.di',
      value: this.aptitudesFormService.form.value.di ?? 0,
      idAction: IdActionsEnum.DI
    },
    {
      label: 'aptitudes.resistances-elem',
      value: this.aptitudesFormService.form.value.resistancesElementairesMajeur ?? 0,
      idAction: IdActionsEnum.RESISTANCES_ELEMENTAIRE
    },
    {
      label: 'aptitudes.soins-realises',
      value: this.aptitudesFormService.form.value.soinsRealise ?? 0,
      idAction: IdActionsEnum.SOINS_REALISE
    },
    {
      label: 'aptitudes.di-indirect',
      value: this.aptitudesFormService.form.value.diIndirect ?? 0,
      idAction: IdActionsEnum.DI_INDIRECT
    },
  ].filter(aptitude => aptitude.value !== 0));
}
