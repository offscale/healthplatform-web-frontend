import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexModule } from '@angular/flex-layout';

import {
  MatButtonModule, MatButtonToggleModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';

import { ArtifactService } from '../../../api/artifact/artifact.service';
import { ArtifactCreateComponent } from '../artifact-create/artifact-create.component';
import { ArtifactTableComponent } from '../artifact-table/artifact-table.component';
import { ArtifactsComponent } from '../artifacts.component';
import { artifactsRoutes } from '../artifacts.routes';
import { ArtifactComponent } from './artifact.component';


@NgModule({
  declarations: [
    ArtifactsComponent, ArtifactCreateComponent, ArtifactTableComponent, ArtifactComponent
  ],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(artifactsRoutes),
    FormsModule, ReactiveFormsModule,

    FlexModule,

    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatTableModule, MatSelectModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonToggleModule
  ],
  exports: [ArtifactCreateComponent, ArtifactTableComponent],
  providers: [ArtifactService]
})
export class ArtifactModule {}
