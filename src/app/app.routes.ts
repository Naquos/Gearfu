import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/items-pages/list-item-router/list-item-router.component').then(m => m.ListItemRouterComponent)
    },
    {
        path: 'aptitudes',
        loadComponent: () => import('./components/aptitudes-pages/aptitudes-router/aptitudes-router.component').then(m => m.AptitudesRouterComponent)
    },
    {
        path: 'sorts',
        loadComponent: () => import('./components/sorts-pages/sorts-router/sorts-router.component').then(m => m.SortsRouterComponent)
    }
];
