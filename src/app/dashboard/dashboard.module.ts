import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule } from '@angular/material';

import { dashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(dashboardRoutes),

    FlexModule,

    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
