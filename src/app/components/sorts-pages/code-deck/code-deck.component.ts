import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { SortFormService } from '../../../services/form-signal/sortFormService';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { ActivateDirective } from '../../../directives/activate.directive';
import { RippleDirective } from '../../../directives/ripple.directive';
import { SortService } from '../../../services/data/sortService';

@Component({
    selector: 'app-code-deck',
    imports: [TranslateModule, MatIconModule, MatTooltipModule, ActivateDirective, RippleDirective],
    templateUrl: './code-deck.component.html',
    styleUrl: './code-deck.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeDeckComponent {
    private readonly sortFormService = inject(SortFormService);
    private readonly sortService = inject(SortService);

    protected readonly codeBuild = toSignal(this.sortFormService.codeBuild$.pipe(
        map(x => x ? x.split('-') : []),
        map(x => {
            if (x.length === 0) {
                return '';
            }
            return x.map(sort => this.sortService.getDescriptionSortByGfxId(+sort))
                .map(sort => sort ? sort.id : '0').join('-');
        })
    ), {
        initialValue: ''
    });

    protected copyToClipboards(): void {
        navigator.clipboard.writeText(this.codeBuild()).then();
    }
}
