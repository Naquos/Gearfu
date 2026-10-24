import { Inject, PLATFORM_ID, inject, Component, ChangeDetectionStrategy, signal, input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, take } from 'rxjs';
import { getBuildIdFromUrl } from '../../models/utils/utils';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { SaveBuildService } from '../../services/saveBuildService';
import { ZenithService } from '../../services/zenith/zenithService';

@Component({
    selector: 'app-main-nav',
    standalone: true,
    imports: [TranslateModule, MatTabsModule, MatIconModule],
    templateUrl: './main-nav.component.html',
    styleUrl: './main-nav.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavComponent {
    private readonly router = inject(Router);
    private readonly zenithService = inject(ZenithService);
    private readonly saveBuildService = inject(SaveBuildService);
    public readonly variant = input<'tabs' | 'rail'>('tabs');
    protected readonly activePageIndex = signal(0);

    protected readonly navItems = [
        { index: 0, icon: 'add', label: 'item-choose.nouveau-build' },
        { index: 1, icon: 'travel_explore', label: 'app.search-builds' },
        { index: 2, icon: 'checkroom', label: 'app.filter-item' },
        { index: 3, icon: 'tune', label: 'app.aptitudes' },
        { index: 4, icon: 'auto_fix_high', label: 'app.sorts' },
        { index: 5, icon: 'diamond', label: 'app.enchantement' },
        { index: 6, icon: 'assignment', label: 'app.recapitulatif' },
        { index: 7, icon: 'folder_special', label: 'app.build' },
        { index: 8, icon: 'open_in_new', label: 'item-choose.zenith-export' }
    ];

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

    private getActivePage(url: string): number {
        if (url.includes('/search')) return 1;
        if (url.includes('/aptitudes')) return 3;
        if (url.includes('/sorts')) return 4;
        if (url.includes('/enchantements')) return 5;
        if (url.includes('/recapitulatif')) return 6;
        if (url.includes('/build')) return 7;
        return 2;
    }

    protected redirectToListItems(): void {
        const currentFragment = isPlatformBrowser(this.platformId) ? window.location.hash.substring(1) : '';
        const buildId = getBuildIdFromUrl(window.location.href);
        this.router.navigate(['/', buildId], {
            fragment: currentFragment || undefined
        });
    }

    protected redirectToPage(page: 'aptitudes' | 'sorts' | 'enchantements' | 'search' | 'build' | 'recapitulatif'): void {

        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        const currentFragment = isPlatformBrowser(this.platformId) ? window.location.hash.substring(1) : '';
        const buildId = getBuildIdFromUrl(window.location.href);
        this.router.navigate(['/', buildId, page], {
            fragment: currentFragment || undefined
        });
    }

    protected generateBuild(): void {
        this.zenithService.createBuild().pipe(take(1)).subscribe(linkBuild => window.open('https://www.zenithwakfu.com/builder/' + linkBuild, '_blank'));
    }

    protected redirectIndex(index: number): void {
        switch (index) {
            case 0:
                this.saveBuildService.createAndNavigate();
                break;
            case 1:
                this.redirectToPage('search');
                break;
            case 2:
                this.redirectToListItems();
                break;
            case 3:
                this.redirectToPage('aptitudes');
                break;
            case 4:
                this.redirectToPage('sorts');
                break;
            case 5:
                this.redirectToPage('enchantements');
                break;
            case 6:
                this.redirectToPage('recapitulatif');
                break;
            case 7:
                this.redirectToPage('build');
                break;
            case 8:
                this.generateBuild();
                break;
            default:
                this.redirectToPage('build');
                break;
        }
    }
}
