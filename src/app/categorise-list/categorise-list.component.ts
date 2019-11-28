import { AfterViewInit, Component } from '@angular/core';

import { ICategorise } from '../../api/categorise/categorise.interfaces';
import { CategoriseService } from '../../api/categorise/categorise.service';
import { AlertsService } from '../alerts/alerts.service';

@Component({
  selector: 'app-categorise-list',
  templateUrl: './categorise-list.component.html',
  styleUrls: ['./categorise-list.component.css']
})
export class CategoriseListComponent implements AfterViewInit {
  categorises: ICategorise[];

  constructor(private alertsService: AlertsService,
              private categoriseService: CategoriseService) { }

  ngAfterViewInit() {
    this.categoriseService
      .getAll()
      .subscribe(
        categorises => this.categorises = categorises,
        this.alertsService.add.bind(this.alertsService)
      );
  }
}
