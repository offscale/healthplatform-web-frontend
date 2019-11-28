import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexModule } from '@angular/flex-layout';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule } from '@angular/material';

import { CategoryEnumService } from '../../api/category-enum/category-enum.service';
import { CategoryEnumCreateComponent } from './category-enum-create/category-enum-create.component';
import { CategoryEnumTableComponent } from './category-enum-table/category-enum-table.component';
import { CategoryEnumComponent } from './category-enum.component';
import { categoryEnumRoutes } from './category-enum.routes';


@NgModule({
  declarations: [CategoryEnumComponent, CategoryEnumCreateComponent, CategoryEnumTableComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(categoryEnumRoutes),
    ReactiveFormsModule,

    FlexModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatSelectModule,
  ],
  exports: [CategoryEnumCreateComponent, CategoryEnumTableComponent],
  providers: [CategoryEnumService]
})
export class CategoryEnumModule {}
