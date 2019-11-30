import { Component } from '@angular/core';
import { NavigationExtras, Router, UrlTree } from '@angular/router';
import { AlertsService } from '../alerts/alerts.service';

@Component({
  selector: 'app-secret-dashboard',
  templateUrl: './secret-dashboard.component.html',
  styleUrls: ['./secret-dashboard.component.css']
})
export class SecretDashboardComponent {
  getUser = () => localStorage.getItem('user');


  constructor(private router: Router,
              private alertsService: AlertsService) { }

  navigateByUrl(url: string | UrlTree, extras?: NavigationExtras) {
    this
      .router
      .navigateByUrl(url, extras)
      .then(() => {})
      .catch(this.alertsService.add.bind(this.alertsService));
  }
}
