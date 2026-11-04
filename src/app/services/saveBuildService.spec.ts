import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Build } from '../models/data/build';
import { AptitudesManualFormService } from './form-signal/aptitudesManualFormServices';
import { ChasseFormService } from './form-signal/chasseFormService';
import { ClasseFormService } from './form-signal/classeFormService';
import { LevelFormService } from './form-signal/levelFormService';
import { NameBuildFormService } from './form-signal/nameBuildFormService';
import { SortFormService } from './form-signal/sortFormService';
import { VisibilityBuildFormService } from './form-signal/visibilityBuildFormService';
import { ItemHistoricsService } from './form-signal/itemHistoricsService';
import { ItemChooseService } from './itemChooseService';
import { CodeAptitudesService } from './codeAptitudesService';
import { ElementSelectorService } from './elementSelectorService';
import { RecapStatsService } from './recapStatsService';
import { SaveBuildService } from './saveBuildService';
import { SupabaseService } from './supabase/supabaseService';
import { LocalStorageService } from './data/localStorageService';
import { KeyEnum } from '../models/enum/keyEnum';

describe('SaveBuildService', () => {
  const savedBuilds: Build[] = [
    { itemsId: 'item-1' },
    { itemsId: 'item-2' }
  ];
  const localStorageService = {
    getItem: jasmine.createSpy().and.returnValue(savedBuilds),
    setItem: jasmine.createSpy()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SaveBuildService,
        { provide: LocalStorageService, useValue: localStorageService },
        { provide: LevelFormService, useValue: {} },
        { provide: ItemChooseService, useValue: { getIdItems: () => '' } },
        { provide: ClasseFormService, useValue: {} },
        { provide: CodeAptitudesService, useValue: {} },
        { provide: SortFormService, useValue: {} },
        { provide: ChasseFormService, useValue: {} },
        { provide: ElementSelectorService, useValue: {} },
        { provide: SupabaseService, useValue: {} },
        { provide: Router, useValue: { navigate: jasmine.createSpy() } },
        { provide: RecapStatsService, useValue: {} },
        { provide: VisibilityBuildFormService, useValue: {} },
        { provide: NameBuildFormService, useValue: {} },
        { provide: ItemHistoricsService, useValue: {} },
        { provide: AptitudesManualFormService, useValue: {} }
      ]
    });
  });

  it('emits a new list reference when removing a build', () => {
    const service = TestBed.inject(SaveBuildService);
    let emittedBuilds: Build[] = [];
    service.buildList$.subscribe(builds => emittedBuilds = builds);

    service.removeBuild({ itemsId: 'item-1' });

    expect(emittedBuilds).toEqual([{ itemsId: 'item-2' }]);
    expect(emittedBuilds).not.toBe(savedBuilds);
    expect(savedBuilds).toEqual([{ itemsId: 'item-1' }, { itemsId: 'item-2' }]);
    expect(localStorageService.setItem).toHaveBeenCalledWith(
      KeyEnum.KEY_SAVE_BUILD_ALL,
      [{ itemsId: 'item-2' }]
    );
  });
});
