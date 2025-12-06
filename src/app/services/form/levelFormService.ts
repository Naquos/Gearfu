import { inject, Injectable } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";
import { UrlServices } from "../urlServices";

@Injectable({providedIn: 'root'})
export class LevelFormService extends AbstractFormService<FormControl<number>> {
    public static readonly DEFAULT_VALUE = 200;
    private readonly urlServices = inject(UrlServices);

    private readonly level = new BehaviorSubject<number>(LevelFormService.DEFAULT_VALUE);
    public readonly level$ = this.level.asObservable();
    
    protected readonly keyEnum = KeyEnum.KEY_LEVEL;
    public readonly form =  new FormControl<number>(LevelFormService.DEFAULT_VALUE, { nonNullable: true });
    
    constructor() {
        super();
        const levelFromUrl = this.urlServices.getLevelFromUrl();
        this.init();
        if(levelFromUrl !== undefined) {
            this.setValue(levelFromUrl);
        }
    }

    protected override handleChanges(value: number): void {
        this.level.next(value);
        this.urlServices.setLevelInUrl(value);
    }
    
    public override setValue(value: number | null): void {
        this.form.setValue(value ?? LevelFormService.DEFAULT_VALUE);
    }
    public override setDefaultValue(): void {
        this.form.setValue(LevelFormService.DEFAULT_VALUE);
    }

    public getValue(): number {
        return this.level.getValue();
    }
}