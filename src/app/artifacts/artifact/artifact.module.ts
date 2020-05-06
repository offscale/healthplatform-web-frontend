import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ArtifactService } from '../../../api/artifact/artifact.service';
import { ArtifactCreateComponent } from '../artifact-create/artifact-create.component';
import { ArtifactTableComponent } from '../artifact-table/artifact-table.component';
import { ArtifactItemModule } from '../../artifact-item/artifact-item.module';
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

    MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatSelectModule,
    MatListModule, MatIconModule, MatToolbarModule, MatButtonToggleModule, FlexLayoutModule,

    ArtifactItemModule
  ],
  exports: [ArtifactCreateComponent, ArtifactTableComponent, ArtifactComponent],
  providers: [ArtifactService]
})
export class ArtifactModule {}
