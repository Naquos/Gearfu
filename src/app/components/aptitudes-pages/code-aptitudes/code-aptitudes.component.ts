import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { ActivateDirective } from '../../../directives/activate.directive';
import { CodeAptitudesService } from '../../../services/codeAptitudesService';
import { RippleDirective } from '../../../directives/ripple.directive';

@Component({
    selector: 'app-code-aptitudes',
    standalone: true,
    imports: [TranslateModule, MatIconModule, MatTooltipModule, ActivateDirective, RippleDirective],
    templateUrl: './code-aptitudes.component.html',
    styleUrl: './code-aptitudes.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeAptitudesComponent {
    private readonly codeAptitudesService = inject(CodeAptitudesService);

    protected readonly codeAptitudes = toSignal(this.codeAptitudesService.code$, {
        initialValue: ''
    });

    protected copyToClipboardCodeAptitudes(): void {
        navigator.clipboard.writeText(this.codeAptitudes()).then();
    }
}
