import { AfterViewInit, Component } from '@angular/core';

import { CategoriseService } from '../../api/categorise/categorise.service';
import { ICategorise } from '../../api/categorise/categorise.interfaces';
import { AlertsService } from '../alerts/alerts.service';

@Component({
  selector: 'app-categorise',
  templateUrl: './categorise.component.html',
  styleUrls: ['./categorise.component.css']
})
export class CategoriseComponent implements AfterViewInit {
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
