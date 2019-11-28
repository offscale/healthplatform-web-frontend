import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexModule } from '@angular/flex-layout';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { CategoriseService } from '../../api/categorise/categorise.service';
import { CategoriseCreateComponent } from '../categorise-create/categorise-create.component';
import { CategoriseListComponent } from '../categorise-list/categorise-list.component';
import { CategoriseComponent } from './categorise.component';
import { categoriseRoutes } from './categorise.routes';


@NgModule({
  declarations: [CategoriseComponent, CategoriseCreateComponent, CategoriseListComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(categoriseRoutes),
    ReactiveFormsModule,

    FlexModule, MatFormFieldModule, MatInputModule, MatButtonModule,
  ],
  exports: [CategoriseCreateComponent, CategoriseListComponent],
  providers: [CategoriseService]
})
export class CategoriseModule {}
