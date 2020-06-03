import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { PyServerStatusService } from '../../api/py-server-status/py-server-status.service';
import { ServerStatusService } from '../../api/server-status/server-status.service';
import { IServerStatus } from '../../api/server-status/server-status.interfaces';
import { AlertsService } from '../alerts/alerts.service';

import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {
  @Input() serverStatus: IServerStatus = {} as IServerStatus;

  constructor(private serverStatusService: ServerStatusService,
              private pyServerStatusService: PyServerStatusService,
              private alertsService: AlertsService) {}

  ngOnInit() {
    this.serverStatus = { version: '@ 0.0.14; ' };
    forkJoin([
      this.serverStatusService.get(),
      this.pyServerStatusService.get()
    ])
      .subscribe(
        (serverStatuses) =>
          this.serverStatus.version += `API ${serverStatuses[0].version}; py ${serverStatuses[1].rest_api_version}`,
        (error: HttpErrorResponse) => {
          const msg = error.status === 504 ? 'API server not available' : error.statusText;
          this.alertsService.add(msg);
          this.serverStatus.version += msg;
        }
      );
  }
}
