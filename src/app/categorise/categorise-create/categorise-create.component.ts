import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MatSelect } from '@angular/material';

import { forkJoin } from 'rxjs';

import { CategoriseService } from '../../../api/categorise/categorise.service';
import { AlertsService } from '../../alerts/alerts.service';
import { removeFalseyProperties } from '../../../utils';
import { ICategorise } from '../../../api/categorise/categorise.interfaces';
import { CategoryEnumService } from '../../../api/category-enum/category-enum.service';
import { ICategoryEnum } from '../../../api/category-enum/category-enum.interfaces';
import { ArtifactService } from '../../../api/artifact/artifact.service';
import { IArtifact } from '../../../api/artifact/artifact.interfaces';
import { parseLocation } from '../../artifacts/artifacts.utils';
import { parseBeforeJsonArray, parseOutJsonArray } from '../categorise.utils';


@Component({
  selector: 'app-categorise-create',
  templateUrl: './categorise-create.component.html',
  styleUrls: ['./categorise-create.component.css']
})
export class CategoriseCreateComponent implements OnInit, AfterViewInit {
  categoryEnum: ICategoryEnum = { enumeration: [], name: '', createdAt: undefined, updatedAt: undefined };

  artifacts: IArtifact[];

  parseArtifactLocation = parseLocation;

  /*@ViewChild('categoryEnumSelection', { static: true })
  categoryEnumSelection: MatSelect;*/

  createForm = this.fb.group({
    id: [''],
    artifact_location: ['', Validators.required],
    categoryEnumName: ['', Validators.required],
    category: ['', Validators.required],
    username: [''],
    createdAt: [''],
    updatedAt: ['']
  });
  enumValueToArray = parseOutJsonArray;

  public categoryEnums: ICategoryEnum[];
  JSON: JSON = JSON;

  constructor(private fb: FormBuilder,
              private alertsService: AlertsService,
              private categoriseService: CategoriseService,
              private categoryEnumService: CategoryEnumService,
              private artifactService: ArtifactService) { }

  ngOnInit() {
    forkJoin([
      this.categoryEnumService.getAll(),
      this.categoriseService.getAll(),
      this.artifactService.getAll()
    ])
      .subscribe((result: [ICategoryEnum[], ICategorise[], IArtifact[]]) => {
        this.categoryEnums = result[0];
        this.categoryEnum = this.categoryEnums[this.categoryEnums.length - 1];
        this.artifacts = result[2];
      });
  }

  ngAfterViewInit() {
  }

  submit() {
    const categorise: ICategorise = removeFalseyProperties(this.createForm.value) as unknown as ICategorise;
    if (categorise == null || !this.createForm.valid) {
      this.alertsService.add('Invalid form');
      return;
    }

    categorise.category_enum_name = this.categoryEnum.name;

    this.categoriseService
      .create(categorise)
      .subscribe(
        createdCategorise => this.alertsService.add(`Added ${createdCategorise.id}`),
        this.alertsService.add.bind(this.alertsService)
      );
  }


  parseAndReturnCategoryName(selection: MatSelect): string | undefined {
    const categoryEnumName = parseBeforeJsonArray(selection);
    if (categoryEnumName != null)
      this.createForm.patchValue({ categoryEnumName });
    return categoryEnumName;
  }
}
