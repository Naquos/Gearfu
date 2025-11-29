import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/item-list/item-list.component').then(m => m.ItemListComponent)
    }
];
