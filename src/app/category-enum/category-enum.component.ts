import { AfterViewInit, Component } from '@angular/core';
import { NavigationExtras, Router, UrlTree } from '@angular/router';

import { CategoryEnumService } from '../../api/category-enum/category-enum.service';
import { ICategoryEnum } from '../../api/category-enum/category-enum.interfaces';
import { AlertsService } from '../alerts/alerts.service';


@Component({
  selector: 'app-category-enum',
  templateUrl: './category-enum.component.html',
  styleUrls: ['./category-enum.component.css']
})
export class CategoryEnumComponent implements AfterViewInit {
  categorises: ICategoryEnum[];

  constructor(private router: Router,
              private alertsService: AlertsService,
              private categoriseService: CategoryEnumService) { }

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
