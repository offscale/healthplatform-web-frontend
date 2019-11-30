import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerDisplayComponent } from './banner-display.component';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [BannerDisplayComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [BannerDisplayComponent]
})
export class BannerDisplayModule { }
