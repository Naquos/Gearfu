import { Inject, PLATFORM_ID, inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { getBuildIdFromUrl } from '../../models/utils/utils';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-main-nav',
    standalone: true,
    imports: [TranslateModule, MatTabsModule],
    templateUrl: './main-nav.component.html',
    styleUrl: './main-nav.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavComponent {
    private readonly router = inject(Router);

    protected readonly activePage = toSignal(
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            map((event: any) => this.getActivePage(event.urlAfterRedirects))
        ),
        { initialValue: this.getActivePage(this.router.url) }
    );

    // eslint-disable-next-line @angular-eslint/prefer-inject
    constructor(@Inject(PLATFORM_ID) private readonly platformId: object) { }

    private getActivePage(url: string): string {
        if (url.includes('/search')) return 'search';
        if (url.includes('/aptitudes')) return 'aptitudes';
        if (url.includes('/sorts')) return 'sorts';
        if (url.includes('/enchantements')) return 'enchantements';
        if (url.includes('/recapitulatif')) return 'recapitulatif';
        if (url.includes('/build')) return 'build';
        return 'filter';
    }

    protected redirectToListItems(): void {
        const currentFragment = isPlatformBrowser(this.platformId) ? window.location.hash.substring(1) : '';
        const buildId = getBuildIdFromUrl(window.location.href);
        this.router.navigate(['/', buildId], {
            fragment: currentFragment || undefined
        });
    }

    protected redirectToPage(page: 'aptitudes' | 'sorts' | 'enchantements' | 'search' | 'build' | 'recapitulatif'): void {
        const currentFragment = isPlatformBrowser(this.platformId) ? window.location.hash.substring(1) : '';
        const buildId = getBuildIdFromUrl(window.location.href);
        this.router.navigate(['/', buildId, page], {
            fragment: currentFragment || undefined
        });
    }

    protected redirectIndex(index: number): void {
        switch (index) {
            case 0:
                this.redirectToPage('search');
                break;
            case 1:
                this.redirectToListItems();
                break;
            case 2:
                this.redirectToPage('aptitudes');
                break;
            case 3:
                this.redirectToPage('sorts');
                break;
            case 4:
                this.redirectToPage('enchantements');
                break;
            case 5:
                this.redirectToPage('recapitulatif');
                break;
            default:
                this.redirectToPage('build');
                break;
        }
    }
}
