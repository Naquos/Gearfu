import { Component, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { SaveBuildService } from '../../services/saveBuildService';
import { toSignal } from '@angular/core/rxjs-interop';
import { VisibilityBuildFormService } from '../../services/form/visibilityBuildFormService';
import { MatIcon } from "@angular/material/icon";
import { map } from 'rxjs';
import { NameBuildFormService } from '../../services/form/nameBuildFormService';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-current-build-name',
    standalone: true,
    imports: [MatIcon, ReactiveFormsModule],
    templateUrl: './current-build-name.component.html',
    styleUrl: './current-build-name.component.scss'
})
export class CurrentBuildNameComponent {
    private readonly saveBuildService = inject(SaveBuildService);
    private readonly readonly = toSignal(this.saveBuildService.buildReadonly$, { initialValue: false });
    private readonly elementRef = inject(ElementRef);
    private readonly inputElement = viewChild<ElementRef<HTMLInputElement>>('inputField');

    protected readonly visibilityBuildFormService = inject(VisibilityBuildFormService);
    protected readonly nameBuildFormService = inject(NameBuildFormService);



    protected readonly currentNameBuild = toSignal(this.saveBuildService.currentNameBuild$, { initialValue: '' });
    protected readonly visibilityBuild = toSignal(this.visibilityBuildFormService.visibilityBuild$, { initialValue: VisibilityBuildFormService.DEFAULT_VALUE });
    protected readonly icon = toSignal(
        this.visibilityBuildFormService.visibilityBuild$.pipe(map(value => value ? 'visibility' : 'visibility_off')),
        { initialValue: this.visibilityBuild() ? 'visibility' : 'visibility_off' });

    protected readonly displayInput = signal<boolean>(false);

    /**
     * Toggle la visibilité du build. Si le build est en lecture seule, la fonction ne fait rien.
     * @returns 
     */
    protected toggleVisibilityBuild(): void {
        if (this.readonly()) {
            return;
        }
        this.visibilityBuildFormService.setValue(!this.visibilityBuild());
    }

    /**
     * Affiche ou cache le champ de saisie du nom du build. Si le build est en lecture seule, la fonction ne fait rien.
     * @returns 
     */
    protected toggleDisplayInput(): void {
        if (this.readonly()) {
            return;
        }
        this.displayInput.set(!this.displayInput());
        if (this.displayInput()) {
            setTimeout(() => this.inputElement()?.nativeElement.focus(), 0);
            this.nameBuildFormService.setValue(this.currentNameBuild());
        }
    }

    /**
     * Cache le champ de saisie du nom du build si l'utilisateur appuie sur la touche "Entrée" 
     * et empêche la propagation de l'événement pour éviter tout comportement indésirable.
     * @param event 
     */
    protected onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            this.displayInput.set(false);
            event.stopPropagation();
        }
    }


    /**
     * Cache le champ de saisie du nom du build si l'utilisateur clique en dehors de celui-ci.
     * @param event L'événement de clic.
     */
    @HostListener('document:pointerdown', ['$event'])
    onPointerDownOutside(event: PointerEvent): void {
        if (!this.displayInput()) return;

        const host = this.elementRef.nativeElement as HTMLElement;
        const clickedInside = event.composedPath().includes(host);

        if (!clickedInside) {
            this.displayInput.set(false);
        }
    }

}
