import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerDisplayComponent } from './banner-display.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BannerDisplayComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        FlexLayoutModule,
        RouterModule
    ],
  exports: [BannerDisplayComponent]
})
export class BannerDisplayModule { }
