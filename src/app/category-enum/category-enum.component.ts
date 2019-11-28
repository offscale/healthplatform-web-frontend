import { AfterViewInit, Component } from '@angular/core';

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

  constructor(private alertsService: AlertsService,
              private categoriseService: CategoryEnumService) { }

  ngAfterViewInit() {
    this.categoriseService
      .getAll()
      .subscribe(
        categorises => this.categorises = categorises,
        this.alertsService.add.bind(this.alertsService)
      );
  }
}
