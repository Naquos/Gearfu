import { Inject, PLATFORM_ID, inject, Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { getBuildIdFromUrl } from '../../models/utils/utils';

@Component({
    selector: 'app-main-nav',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './main-nav.component.html',
    styleUrl: './main-nav.component.scss'
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

    protected redirectToBuild(): void {
        this.redirectToPage('build');
    }

    protected redirectToSearch(): void {
        this.redirectToPage('search');
    }

    protected redirectToAptitudes(): void {
        this.redirectToPage('aptitudes');
    }

    protected redirectToSorts(): void {
        this.redirectToPage('sorts');
    }

    protected redirectToEnchantements(): void {
        this.redirectToPage('enchantements');
    }

    protected redirectToRecapitulatif(): void {
        this.redirectToPage('recapitulatif');
    }
}
