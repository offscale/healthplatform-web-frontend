import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: { role: ['admin'] }
  },
  {
    path: 'secret-dashboard',
    loadChildren: () => import('./secret-dashboard/secret-dashboard.module').then(m => m.SecretDashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'artifact',
    loadChildren: () => import('./artifacts/artifact/artifact.module').then(m => m.ArtifactModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'categorise',
    loadChildren: () => import('./categorise/categorise.module').then(m => m.CategoriseModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'category-enum',
    loadChildren: () => import('./category-enum/category-enum.module').then(m => m.CategoryEnumModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'triage',
    loadChildren: () => import('./triage/triage.module').then(m => m.TriageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'export',
    loadChildren: () => import('./export/export.module').then(m => m.ExportModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ml-dashboard',
    loadChildren: () => import('./ml-dashboard/ml-dashboard.module').then(m => m.MlDashboardModule),
    canActivate: [AuthGuard]
  }
];

export const getRedirectUrl = (url: string): string | null => new URLSearchParams(url.slice(1)).get('redirectUrl');

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
