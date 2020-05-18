import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoriseService } from '../../api/categorise/categorise.service';
import { ExportComponent } from './export.component';
import { exportRoutes } from './export.routes';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ExportComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(exportRoutes),
    MatTableModule, MatButtonModule
  ],
  providers: [CategoriseService]
})
export class ExportModule { }
