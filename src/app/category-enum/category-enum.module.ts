import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { CategoryEnumService } from '../../api/category-enum/category-enum.service';
import { BannerDisplayModule } from '../banner-display/banner-display.module';
import { CategoryEnumCreateComponent } from './category-enum-create/category-enum-create.component';
import { CategoryEnumTableComponent } from './category-enum-table/category-enum-table.component';
import { CategoryEnumComponent } from './category-enum.component';
import { categoryEnumRoutes } from './category-enum.routes';


@NgModule({
  declarations: [CategoryEnumComponent, CategoryEnumCreateComponent, CategoryEnumTableComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(categoryEnumRoutes),
    ReactiveFormsModule, FormsModule,

    FlexModule,

    MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule,
    MatSelectModule, MatListModule, MatIconModule,

    BannerDisplayModule
  ],
  exports: [CategoryEnumCreateComponent, CategoryEnumTableComponent],
  providers: [CategoryEnumService]
})
export class CategoryEnumModule {}
