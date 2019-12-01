import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtifactItemComponent } from './artifact-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
    declarations: [ArtifactItemComponent],
    exports: [
        ArtifactItemComponent
    ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class ArtifactItemModule { }
