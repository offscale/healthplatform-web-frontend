import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SecretDashboardComponent } from './secret-dashboard.component';
import { secretDashboardRoutes } from './secret-dashboard.routes';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(secretDashboardRoutes), FlexModule
  ],
  declarations: [SecretDashboardComponent]
})
export class SecretDashboardModule {}
