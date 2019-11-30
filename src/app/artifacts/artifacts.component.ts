import { AfterViewInit, Component } from '@angular/core';
import { NavigationExtras, Router, UrlTree } from '@angular/router';

import { ArtifactService } from '../../api/artifact/artifact.service';
import { IArtifact } from '../../api/artifact/artifact.interfaces';
import { AlertsService } from '../alerts/alerts.service';


@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements AfterViewInit {
  categorises: IArtifact[];

  constructor(private router: Router,
              private alertsService: AlertsService,
              private categoriseService: ArtifactService) { }

  ngAfterViewInit() {
    this.categoriseService
      .getAll()
      .subscribe(
        categorises => this.categorises = categorises,
        this.alertsService.add.bind(this.alertsService)
      );
  }

  navigateByUrl(url: string | UrlTree, extras?: NavigationExtras) {
    this
      .router
      .navigateByUrl(url, extras)
      .then(() => {})
      .catch(this.alertsService.add.bind(this.alertsService));
  }
}
