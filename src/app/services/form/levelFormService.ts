import { Injectable } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class LevelFormService extends AbstractFormService<FormControl<number>> {
    public static readonly DEFAULT_VALUE = 200;

    private readonly level = new BehaviorSubject<number>(LevelFormService.DEFAULT_VALUE);
    public readonly level$ = this.level.asObservable();
    
    protected readonly keyEnum = KeyEnum.KEY_LEVEL;
    public readonly form =  new FormControl<number>(LevelFormService.DEFAULT_VALUE, { nonNullable: true });
    
    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: number): void {
        this.level.next(value);
    }
    
    public override setValue(value: number | null): void {
        this.form.setValue(value ?? LevelFormService.DEFAULT_VALUE);
    }
    public override setDefaultValue(): void {
        this.form.setValue(LevelFormService.DEFAULT_VALUE);
    }
}