import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

import { ICategorise } from '../../../api/categorise/categorise.interfaces';
import { CategoriseService } from '../../../api/categorise/categorise.service';
import { AlertsService } from '../../alerts/alerts.service';
import { ILocation, parseLocation } from '../../artifacts/artifacts.utils';


@Component({
  selector: 'app-category-enum-table',
  templateUrl: './categorise-table.component.html',
  styleUrls: ['./categorise-table.component.css']
})
export class CategoriseTableComponent implements OnInit {
  categorises: ICategorise[];
  dataSource: MatTableDataSource<ICategorise & ILocation>;
  displayedColumns: string[] = [
    'updatedAt',
    'id', 'artifactLocation', 'category', 'username',
    // , 'createdAt',
  ];

  constructor(private alertsService: AlertsService,
              private categoriseService: CategoriseService) { }

  ngOnInit() {
    this.categoriseService
      .getAll()
      .subscribe(
        categorises => this.dataSource = new MatTableDataSource(
          categorises
            .map(categorise => Object.assign(categorise, { location: categorise.artifactLocation }))
            .map(parseLocation)),
        this.alertsService.add.bind(this.alertsService)
      );
  }
}
