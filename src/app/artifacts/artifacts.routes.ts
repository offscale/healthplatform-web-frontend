import { Routes } from '@angular/router';

import { ArtifactsComponent } from './artifacts.component';
import { ArtifactComponent } from './artifact/artifact.component';

export const artifactsRoutes: Routes = [
  { path: '', component: ArtifactsComponent },
  { path: ':location', component: ArtifactComponent }
];
