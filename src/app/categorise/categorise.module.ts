import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

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
