import { Routes } from '@angular/router';

import { TriageItemComponent } from './triage-item/triage-item.component';
import { TriageComponent } from './triage.component';


export const triageRoutes: Routes = [
  { path: '', component: TriageComponent },
  { path: ':location', component: TriageItemComponent }
];
