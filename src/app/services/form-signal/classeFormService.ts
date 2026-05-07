import { computed, Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ClassIdEnum } from "../../models/enum/classIdEnum";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface ClasseModel {
    classeId: ClassIdEnum;
}

@Injectable({ providedIn: 'root' })
export class ClasseFormService extends AbstractSignalFormService<ClasseModel> {
    public static readonly DEFAULT_VALUE = ClassIdEnum.Eniripsa;

    private readonly classe = new BehaviorSubject<ClassIdEnum>(ClasseFormService.DEFAULT_VALUE);
    public readonly classe$ = this.classe.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_CLASSE;
    protected readonly model = signal<ClasseModel>({ classeId: ClasseFormService.DEFAULT_VALUE });

    public readonly currentValue = computed(() => this.model().classeId);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: ClasseModel): void {
        this.classe.next(value.classeId);
    }

    public override setValue(value: ClassIdEnum | ClasseModel | null): void {
        this.model.set({ classeId: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ classeId: ClasseFormService.DEFAULT_VALUE });
    }

    public getValue(): ClassIdEnum {
        return this.classe.getValue();
    }

    private normalizeStoredValue(value: ClassIdEnum | ClasseModel | null): ClassIdEnum {
        if (typeof value === 'number' && Object.values(ClassIdEnum).includes(value as ClassIdEnum)) {
            return value as ClassIdEnum;
        }
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['classeId'] ?? raw['value'];
            if (typeof candidate === 'number' && Object.values(ClassIdEnum).includes(candidate as ClassIdEnum)) {
                return candidate as ClassIdEnum;
            }
        }
        return ClasseFormService.DEFAULT_VALUE;
    }
}
