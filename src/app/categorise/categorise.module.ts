import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatSelectModule, MatTableModule } from '@angular/material';

import { CategoriseService } from '../../api/categorise/categorise.service';
import { CategoryEnumService } from '../../api/category-enum/category-enum.service';
import { CategoriseCreateComponent } from './categorise-create/categorise-create.component';
import { CategoriseTableComponent } from './categorise-table/categorise-table.component';
import { ArtifactService } from '../../api/artifact/artifact.service';
import { BannerDisplayModule } from '../banner-display/banner-display.module';
import { CategoriseComponent } from './categorise.component';
import { categoriseRoutes } from './categorise.routes';


@NgModule({
  declarations: [CategoriseComponent, CategoriseCreateComponent, CategoriseTableComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(categoriseRoutes),
    ReactiveFormsModule,

    FlexModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    MatTableModule, MatSelectModule, FlexLayoutModule, MatListModule,

    BannerDisplayModule
  ],
  exports: [CategoriseCreateComponent, CategoriseTableComponent],
  providers: [CategoriseService, CategoryEnumService, ArtifactService]
})
export class CategoriseModule {}
