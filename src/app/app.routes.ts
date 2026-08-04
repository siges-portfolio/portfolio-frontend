import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@layout/base-layout/base-layout.component').then((m) => m.BaseLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('@modules/landing/landing.component').then((m) => m.LandingComponent),
            }
        ]
    }
];
