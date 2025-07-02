import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'planos', loadComponent: () => import('./pages/plans/plans').then(m => m.Plans) },
  { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.Login) },
  { path: 'vagas', loadComponent: () => import('./pages/vagas/vagas').then(m => m.Vagas) },
];
