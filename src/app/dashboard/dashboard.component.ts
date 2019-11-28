import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { AlertsService } from '../alerts/alerts.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public router: Router,
              private alertsService: AlertsService,
              private snackBar: MatSnackBar) {}

  openSnackBar(message, action = 'Ok', duration = 5000 /* 5 seconds */) {
    this.snackBar.open(message, action, { duration });
  }

  navigateByUrl(url: string) {
    this
      .router
      .navigateByUrl(url)
      .then(() => {})
      .catch(this.alertsService.add.bind(this.alertsService));
  }
}
