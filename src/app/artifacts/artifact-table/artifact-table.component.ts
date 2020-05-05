import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';

import { ArtifactService } from '../../../api/artifact/artifact.service';
import { AlertsService } from '../../alerts/alerts.service';
import { IArtifact } from '../../../api/artifact/artifact.interfaces';
import { parseLocation } from '../artifacts.utils';


@Component({
  selector: 'app-artifact-table',
  templateUrl: './artifact-table.component.html',
  styleUrls: ['./artifact-table.component.css']
})
export class ArtifactTableComponent implements OnInit {
  artifacts: IArtifact[];
  dataSource: MatTableDataSource<IArtifact>;
  displayedColumns: string[] = [
    'location', 'mimeType', 'contentType', 'meta'
    // , 'createdAt', 'updatedAt'
  ];
  parseLocation = parseLocation;

  constructor(private router: Router,
              private alertsService: AlertsService,
              private artifactService: ArtifactService) { }

  ngOnInit() {
    this.artifactService
      .getAll()
      .subscribe(artifacts => {
          this.artifacts = artifacts.map(parseLocation);
          this.dataSource = new MatTableDataSource(artifacts);
        },
        this.alertsService.add.bind(this.alertsService)
      );
  }
}
