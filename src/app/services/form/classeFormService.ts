import { Injectable } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { ClassIdEnum } from "../../models/enum/classIdEnum";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ClasseFormService extends AbstractFormService<FormControl<ClassIdEnum>> {
    public static readonly DEFAULT_VALUE = ClassIdEnum.Eniripsa;

    private readonly classe = new BehaviorSubject<ClassIdEnum>(ClasseFormService.DEFAULT_VALUE);
    public readonly classe$ = this.classe.asObservable();

    
    protected readonly keyEnum = KeyEnum.KEY_CLASSE;
    public readonly form =  new FormControl<ClassIdEnum>(ClasseFormService.DEFAULT_VALUE, { nonNullable: true });
    
    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: ClassIdEnum): void {
        this.classe.next(value);
    }
    
    public override setValue(value: ClassIdEnum | null): void {
        this.form.setValue(value ?? ClasseFormService.DEFAULT_VALUE);
    }
    public override setDefaultValue(): void {
        this.form.setValue(ClasseFormService.DEFAULT_VALUE);
    }

    public getValue(): ClassIdEnum {
        return this.classe.getValue();
    }
}