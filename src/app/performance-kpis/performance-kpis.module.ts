import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule, MatIconModule } from '@angular/material';

import { PerformanceKpisComponent } from './performance-kpis.component';


@NgModule({
  declarations: [PerformanceKpisComponent],
  exports: [
    PerformanceKpisComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class PerformanceKpisModule {}
