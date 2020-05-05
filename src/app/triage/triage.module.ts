import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CategoryEnumService } from '../../api/category-enum/category-enum.service';
import { PerformanceKpisModule } from '../performance-kpis/performance-kpis.module';
import { TriageItemComponent } from './triage-item/triage-item.component';
import { TriageComponent } from './triage.component';
import { triageRoutes } from './triage.routes';
import { ArtifactItemModule } from '../artifact-item/artifact-item.module';
import { CategoriseService } from '../../api/categorise/categorise.service';
import { TriageNextComponent } from './triage-next/triage-next.component';


@NgModule({
  declarations: [TriageComponent, TriageItemComponent, TriageNextComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(triageRoutes),
    FormsModule, ReactiveFormsModule,

    MatButtonModule, FlexLayoutModule, MatIconModule, MatListModule, MatInputModule,
    MatSelectModule, MatToolbarModule, MatButtonToggleModule,

    PerformanceKpisModule, ArtifactItemModule,
  ],
  providers: [CategoryEnumService, CategoriseService]
})
export class TriageModule {}
