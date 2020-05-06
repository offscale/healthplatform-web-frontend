import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { CategoriseService } from '../../api/categorise/categorise.service';
import { BannerDisplayModule } from '../banner-display/banner-display.module';
import { PerformanceKpisModule } from '../performance-kpis/performance-kpis.module';
import { SecretDashboardComponent } from './secret-dashboard.component';
import { secretDashboardRoutes } from './secret-dashboard.routes';


@NgModule({
    imports: [
        CommonModule, RouterModule, RouterModule.forChild(secretDashboardRoutes),

        FlexModule,

        MatIconModule, MatButtonModule, MatCardModule,

        BannerDisplayModule, PerformanceKpisModule
    ],
  declarations: [SecretDashboardComponent],
  providers: [CategoriseService]
})
export class SecretDashboardModule {}
