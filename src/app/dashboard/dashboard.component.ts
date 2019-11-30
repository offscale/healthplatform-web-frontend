import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, UrlTree } from '@angular/router';

import { AuthService } from '../../api/auth/auth.service';
import { AlertsService } from '../alerts/alerts.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router,
              private alertsService: AlertsService) {}

  ngOnInit(): void {
    if (AuthService.loggedIn())
      return this.navigateByUrl('/secret-dashboard');
  }

  navigateByUrl(url: string | UrlTree, extras?: NavigationExtras) {
    this
      .router
      .navigateByUrl(url, extras)
      .then(() => {})
      .catch(this.alertsService.add.bind(this.alertsService));
  }
}
