import { Routes } from '@angular/router';
import { buildIdGuard } from './guards/buildIdGuard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        canActivate: [buildIdGuard],
        loadComponent: () => import('./components/items-pages/list-item-router/list-item-router.component').then(m => m.ListItemRouterComponent),

    },
    {
        path: ':id',
        children: [
            {
                path: '',
                loadComponent: () => import('./components/items-pages/list-item-router/list-item-router.component').then(m => m.ListItemRouterComponent)
            },
            {
                path: 'build',
                loadComponent: () => import('./components/items-pages/list-item-router/list-item-router.component').then(m => m.ListItemRouterComponent)
            },
            {
                path: 'aptitudes',
                loadComponent: () => import('./components/aptitudes-pages/aptitudes-router/aptitudes-router.component').then(m => m.AptitudesRouterComponent)
            },
            {
                path: 'sorts',
                loadComponent: () => import('./components/sorts-pages/sorts-router/sorts-router.component').then(m => m.SortsRouterComponent)
            },
            {
                path: 'enchantements',
                loadComponent: () => import('./components/enchantement-pages/enchantement-router/enchantement-router.component').then(m => m.EnchantementRouterComponent)
            },
            {
                path: 'search',
                loadComponent: () => import('./components/search-pages/search-pages-router/search-pages-router.component').then(m => m.SearchPagesRouterComponent)
            }
        ]
    }
];
