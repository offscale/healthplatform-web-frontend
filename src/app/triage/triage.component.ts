import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSelect } from '@angular/material';

import { removeEmpty, removeFalseyProperties } from '../../utils';
import { CategoryEnumService } from '../../api/category-enum/category-enum.service';
import { ICategoryEnum } from '../../api/category-enum/category-enum.interfaces';
import { AlertsService } from '../alerts/alerts.service';
import { parseBeforeJsonArray, parseOutJsonArray } from '../categorise/categorise.utils';
import { CategoriseService } from '../../api/categorise/categorise.service';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
  styleUrls: ['./triage.component.css']
})
export class TriageComponent implements OnInit {
  public categoryEnums: ICategoryEnum[];

  defaultsForm: FormGroup = this.fb.group({
    defaultCategoryEnum: [localStorage.getItem('defaultCategoryEnum') || '', Validators.required]
  });

  filterForm: FormGroup = this.fb.group({
    username: [JSON.parse(localStorage.getItem('categoriseServiceFilterForm') || '{}').username || localStorage.getItem('user'),
      Validators.required],
    category: [''],
    categoryEnum: [JSON.parse(localStorage.getItem('categoriseServiceFilterForm') || '{}').categoryEnum || localStorage.getItem('defaultCategoryEnum') || ''],
    updatedAt: [new Date(2019, 2, 15).toISOString()]
  });
  enumValueToArray = parseOutJsonArray;

  JSON = JSON;

  constructor(private fb: FormBuilder,
              private alertsService: AlertsService,
              private categoriseService: CategoriseService,
              private categoryEnumService: CategoryEnumService) {

  }

  ngOnInit() {
    this.categoryEnumService
      .getAll()
      .subscribe(categoryEnums =>
        this.categoryEnums = categoryEnums
      );
  }

  submitDefaults() {
    if (this.defaultsForm.value != null && this.defaultsForm.get('defaultCategoryEnum') != null)
      localStorage.setItem('defaultCategoryEnum', this.defaultsForm.get('defaultCategoryEnum').value);
    this.refresh();
  }

  submitFilter() {
    const queryParams = removeEmpty(this.filterForm.value);
    if (Object.keys(queryParams).length > 0) {
      localStorage.setItem('categoriseServiceFilterForm', JSON.stringify(queryParams));
      this.categoriseService._setHttpParamsFromLocalStorage();
    }
    this.refresh();
  }

  isCreateFormValid(): boolean {
    const keys = Object
      .keys(removeFalseyProperties(this.filterForm.value))
      .filter(k => this.filterForm.value[k].length > 0);
    return keys.length > 0 && keys.indexOf('location') > -1;
  }

  parseAndReturnCategoryName(selection: MatSelect | AbstractControl): string | undefined {
    const categoryEnumName = parseBeforeJsonArray(selection);

    if (categoryEnumName != null)
      this.filterForm.patchValue({ categoryEnumName });
    return categoryEnumName;
  }

  searchForUncategorised() {
    localStorage.setItem('categoriseServiceFilterForm', JSON.stringify({}));
    this.categoriseService._setHttpParamsFromLocalStorage();
    this.categoriseService.httpParams = new HttpParams();
    this.refresh();
  }

  // TODO: Remove this
  refresh() {
    window.location.reload();
  }
}
