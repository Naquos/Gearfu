import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/list-item-router/list-item-router.component').then(m => m.ListItemRouterComponent)
    },
    {
        path: 'aptitudes',
        loadComponent: () => import('./components/aptitudes-router/aptitudes-router.component').then(m => m.AptitudesRouterComponent)
    }
];
