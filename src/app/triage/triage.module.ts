import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TriageComponent } from './triage.component';
import { triageRoutes } from './triage.routes';
import { PerformanceKpisModule } from '../performance-kpis/performance-kpis.module';
import { MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoryEnumService } from '../../api/category-enum/category-enum.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TriageComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(triageRoutes),
    FormsModule, ReactiveFormsModule,

    PerformanceKpisModule, MatButtonModule, FlexLayoutModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule
  ],
  providers: [CategoryEnumService]
})
export class TriageModule {}
