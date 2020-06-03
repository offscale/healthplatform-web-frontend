import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MlDashboardComponent } from './ml-dashboard.component';
import { mlDashboardRoutes } from './ml-dashboard.routes';
import { PyStatsService } from '../../api/py-stats/py-stats.service';


@NgModule({
  declarations: [MlDashboardComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(mlDashboardRoutes),
  ],
  providers: [PyStatsService]
})
export class MlDashboardModule {}
