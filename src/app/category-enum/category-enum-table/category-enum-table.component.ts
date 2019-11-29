import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

import { CategoryEnumService } from '../../../api/category-enum/category-enum.service';
import { AlertsService } from '../../alerts/alerts.service';
import { ICategoryEnum } from '../../../api/category-enum/category-enum.interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-enum-table',
  templateUrl: './category-enum-table.component.html',
  styleUrls: ['./category-enum-table.component.css']
})
export class CategoryEnumTableComponent implements OnInit {
  categoryEnums: ICategoryEnum[];
  dataSource: MatTableDataSource<ICategoryEnum>;
  displayedColumns: string[] = [
    'name', 'enumeration'
    // , 'createdAt', 'updatedAt'
  ];

  constructor(private router: Router,
              private alertsService: AlertsService,
              private categoryEnumService: CategoryEnumService) { }

  ngOnInit() {
    this.categoryEnumService
      .getAll()
      .subscribe(categoryEnums => {
          this.categoryEnums = categoryEnums;
          this.dataSource = new MatTableDataSource(categoryEnums);
        },
        this.alertsService.add.bind(this.alertsService)
      );
  }
}
