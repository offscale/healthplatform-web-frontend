import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { PyStatsModule } from '../py-stats/py-stats.module';
import { MlDashboardComponent } from './ml-dashboard.component';
import { mlDashboardRoutes } from './ml-dashboard.routes';


@NgModule({
  declarations: [MlDashboardComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(mlDashboardRoutes),

    // PyStatsModule
  ],
  providers: []
})
export class MlDashboardModule {}
