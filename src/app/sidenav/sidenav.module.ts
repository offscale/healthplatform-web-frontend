import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { ServerStatusModule } from '../server-status/server-status.module';
import { SidenavComponent } from './sidenav.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    ServerStatusModule,
    FlexModule,
    FlexLayoutModule
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class SidenavModule {}
