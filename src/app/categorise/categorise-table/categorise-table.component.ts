import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

import { ICategorise } from '../../../api/categorise/categorise.interfaces';
import { CategoriseService } from '../../../api/categorise/categorise.service';
import { AlertsService } from '../../alerts/alerts.service';


@Component({
  selector: 'app-category-enum-table',
  templateUrl: './categorise-table.component.html',
  styleUrls: ['./categorise-table.component.css']
})
export class CategoriseTableComponent implements OnInit {
  categorises: ICategorise[];
  dataSource: MatTableDataSource<ICategorise>;
  displayedColumns: string[] = [
    'id', 'artifact_id', 'category', 'username'
    // , 'createdAt', 'updatedAt'
  ];

  constructor(private alertsService: AlertsService,
              private categoriseService: CategoriseService) { }

  ngOnInit() {
    this.categoriseService
      .getAll()
      .subscribe(categorises => {
          this.categorises = categorises;
          this.dataSource = new MatTableDataSource(categorises);
        },
        this.alertsService.add.bind(this.alertsService)
      );
  }
}
