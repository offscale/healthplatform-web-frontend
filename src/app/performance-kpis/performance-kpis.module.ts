import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { PerformanceKpisComponent } from './performance-kpis.component';
import { ArtifactService } from '../../api/artifact/artifact.service';
import { CategoriseService } from '../../api/categorise/categorise.service';


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
  ],
  providers: [
    ArtifactService, CategoriseService
  ]
})
export class PerformanceKpisModule {}
