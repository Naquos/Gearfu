import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/item-list/item-list.component').then(m => m.ItemListComponent)
    },
    {
        path: 'aptitudes',
        loadComponent: () => import('./components/aptitudes-router/aptitudes-router.component').then(m => m.AptitudesRouterComponent)
    }
];
