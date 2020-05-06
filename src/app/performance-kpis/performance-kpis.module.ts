import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { PerformanceKpisComponent } from './performance-kpis.component';
import { ArtifactService } from '../../api/artifact/artifact.service';


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
    ArtifactService
  ]
})
export class PerformanceKpisModule {}
