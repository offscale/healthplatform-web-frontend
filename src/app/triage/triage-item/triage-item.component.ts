import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { MatButtonToggleGroup } from '@angular/material';

import { forkJoin } from 'rxjs';

import { IArtifact } from '../../../api/artifact/artifact.interfaces';
import { ICategorise } from '../../../api/categorise/categorise.interfaces';
import { ArtifactService } from '../../../api/artifact/artifact.service';
import { CategoriseService } from '../../../api/categorise/categorise.service';
import { ICategoryEnum } from '../../../api/category-enum/category-enum.interfaces';
import { parseBeforeJsonArray, parseOutJsonArray } from '../../categorise/categorise.utils';
import { AlertsService } from '../../alerts/alerts.service';


@Component({
  selector: 'app-triage-item',
  templateUrl: './triage-item.component.html',
  styleUrls: ['./triage-item.component.css']
})
export class TriageItemComponent implements OnInit {
  artifactsLeft: IArtifact[];
  artifacts: IArtifact[];
  categorises: ICategorise[];
  categoryEnum: ICategoryEnum;
  lastDate: Date = new Date();


  @ViewChild('enumerationGroup', { static: false })
  enumerationGroup: MatButtonToggleGroup;

  enumerationGroupValue: string;

  constructor(private route: ActivatedRoute,
              private alertsService: AlertsService,
              private artifactService: ArtifactService,
              private categoriseService: CategoriseService) {
  }

  ngOnInit() {
    this.setCategoryEnum();

    forkJoin([
      this.artifactService
        .getAll(),
      this.artifactService
        .getNext(),
      this.categoriseService
        .getAll()
    ])
      .subscribe((result: [IArtifact[], IArtifact[], ICategorise[]]) =>
        [this.artifactsLeft, this.artifacts, this.categorises] = result
      );
  }

  categorySet(value?: string) {
    const now: Date = new Date();

    // @ts-ignore
    if ((now - this.lastDate) > 500 && (value != null || this.enumerationGroupValue != null)) {
      this.lastDate = now;
      this
        .categoriseService
        .create({
            artifactLocation: this.route.snapshot.url[0].path,
            category: this.enumerationGroupValue,
            categoryEnumName: this.categoryEnum.name,
            username: localStorage.getItem('user')
          },
          { params: new HttpParams().set('upsert', 'true') }
        )
        .subscribe(categorise =>
            this.alertsService.add(`Categorised as ${categorise.category}`),
          this.alertsService.add.bind(this.alertsService)
        );
    }
  }

  setCategoryEnum() {
    const categoryEnum = localStorage.getItem('defaultCategoryEnum');
    if (categoryEnum == null) return;
    this.categoryEnum = {
      name: parseBeforeJsonArray({ value: categoryEnum }).slice(0, -1),
      enumeration: parseOutJsonArray(categoryEnum)
    };
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    switch (event.key) {
      case 'n':
        throw TypeError('TODO: Implement `n` to call next button');
      case '0':
        throw TypeError('INDEXES START AT 1 DAMMIT!');
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        const key = parseInt(event.key, 10) - 1;
        if (key < this.categoryEnum.enumeration.length) {
          this.enumerationGroupValue = this.categoryEnum.enumeration[key];
          this.categorySet(this.enumerationGroupValue);
        }
    }
  }
}
