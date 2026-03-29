import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { SortFormService } from '../../../services/form/sortFormService';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivateDirective } from '../../../directives/activate.directive';

@Component({
    selector: 'app-code-deck',
    imports: [TranslateModule, MatIconModule, MatTooltipModule, ActivateDirective],
    templateUrl: './code-deck.component.html',
    styleUrl: './code-deck.component.scss'
})
export class CodeDeckComponent {
    private readonly sortFormService = inject(SortFormService);

    protected readonly codeBuild = toSignal(this.sortFormService.codeBuild$, {
        initialValue: ''
    });

    protected copyToClipboards(): void {
        navigator.clipboard.writeText(this.codeBuild()).then();
    }
}
