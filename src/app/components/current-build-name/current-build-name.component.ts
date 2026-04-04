import { Component, inject } from '@angular/core';
import { SaveBuildService } from '../../services/saveBuildService';
import { toSignal } from '@angular/core/rxjs-interop';
import { VisibilityBuildFormService } from '../../services/form/visibilityBuildFormService';
import { MatIcon } from "@angular/material/icon";
import { map } from 'rxjs';

@Component({
    selector: 'app-current-build-name',
    standalone: true,
    imports: [MatIcon],
    templateUrl: './current-build-name.component.html',
    styleUrl: './current-build-name.component.scss'
})
export class CurrentBuildNameComponent {
    private readonly saveBuildService = inject(SaveBuildService);
    protected readonly visibilityBuildFormService = inject(VisibilityBuildFormService);
    protected readonly currentNameBuild = toSignal(this.saveBuildService.currentNameBuild$, { initialValue: '' });
    protected readonly visibilityBuild = toSignal(this.visibilityBuildFormService.visibilityBuild$, { initialValue: VisibilityBuildFormService.DEFAULT_VALUE });
    protected readonly icon = toSignal(
        this.visibilityBuildFormService.visibilityBuild$.pipe(map(value => value ? 'visibility' : 'visibility_off')),
        { initialValue: this.visibilityBuild() ? 'visibility' : 'visibility_off' });
}
