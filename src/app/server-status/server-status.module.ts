import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

import { ServerStatusService } from '../../api/server-status/server-status.service';
import { PyServerStatusService } from '../../api/py-server-status/py-server-status.service';
import { ServerStatusComponent } from './server-status.component';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [ServerStatusComponent],
  providers: [ServerStatusService, PyServerStatusService],
  exports: [ServerStatusComponent]
})
export class ServerStatusModule {}
