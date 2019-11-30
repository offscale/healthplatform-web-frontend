import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexModule } from '@angular/flex-layout';

import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';

import { SecretDashboardComponent } from './secret-dashboard.component';
import { secretDashboardRoutes } from './secret-dashboard.routes';
import { BannerDisplayModule } from '../banner-display/banner-display.module';
import { PerformanceKpisModule } from '../performance-kpis/performance-kpis.module';


@NgModule({
    imports: [
        CommonModule, RouterModule, RouterModule.forChild(secretDashboardRoutes),

        FlexModule,

        MatIconModule, MatButtonModule, MatCardModule,

        BannerDisplayModule, PerformanceKpisModule
    ],
  declarations: [SecretDashboardComponent]
})
export class SecretDashboardModule {}
