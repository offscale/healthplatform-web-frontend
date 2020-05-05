import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { dashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { BannerDisplayModule } from '../banner-display/banner-display.module';


@NgModule({
    imports: [
        CommonModule, RouterModule, RouterModule.forChild(dashboardRoutes),

        FlexModule,

        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule, BannerDisplayModule, FlexLayoutModule
    ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
