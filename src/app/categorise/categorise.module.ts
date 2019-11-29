import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule } from '@angular/material';

import { CategoriseService } from '../../api/categorise/categorise.service';
import { CategoriseCreateComponent } from './categorise-create/categorise-create.component';
import { CategoriseTableComponent } from './categorise-table/categorise-table.component';
import { CategoriseComponent } from './categorise.component';
import { categoriseRoutes } from './categorise.routes';


@NgModule({
  declarations: [CategoriseComponent, CategoriseCreateComponent, CategoriseTableComponent],
    imports: [
        CommonModule, RouterModule, RouterModule.forChild(categoriseRoutes),
        ReactiveFormsModule,

        FlexModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatSelectModule, FlexLayoutModule,
    ],
  exports: [CategoriseCreateComponent, CategoriseTableComponent],
  providers: [CategoriseService]
})
export class CategoriseModule {}
