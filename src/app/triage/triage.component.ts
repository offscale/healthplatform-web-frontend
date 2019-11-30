import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSelect } from '@angular/material';

import { removeFalseyProperties } from '../../utils';
import { CategoryEnumService } from '../../api/category-enum/category-enum.service';
import { ICategoryEnum } from '../../api/category-enum/category-enum.interfaces';
import { AlertsService } from '../alerts/alerts.service';
import { parseBeforeJsonArray, parseOutJsonArray } from '../categorise/categorise.utils';


@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
  styleUrls: ['./triage.component.css']
})
export class TriageComponent implements OnInit {
  private categoryEnums: ICategoryEnum[];

  defaultsForm: FormGroup = this.fb.group({
    defaultCategoryEnum: ['', Validators.required]
  });

  filterForm: FormGroup = this.fb.group({
    username: [localStorage.getItem('user'), Validators.required],
    category: [''],
    categoryEnum: [''],
    updatedAt: [new Date(2019, 2, 15).toISOString()]
  });
  enumValueToArray = parseOutJsonArray;

  JSON = JSON;

  constructor(private fb: FormBuilder,
              private alertsService: AlertsService,
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
    console.info('TriageComponent::defaultsForm.value:', this.defaultsForm.value, ';');
  }

  submitFilter() {
    console.info('TriageComponent::filterForm.value:', this.filterForm.value, ';');
    /*
    const artifact: IArtifact = removeFalseyProperties(
      this.filterForm.value
    ) as unknown as IArtifact;
    if (artifact == null
      || Object.keys(artifact).length === 0
      || !this.isCreateFormValid()) {
      this.alertsService.add('Invalid form');
      return;
    }
    */
  }

  isCreateFormValid(): boolean {
    const keys = Object
      .keys(removeFalseyProperties(this.filterForm.value))
      .filter(k => this.filterForm.value[k].length > 0);
    return keys.length > 0 && keys.indexOf('location') > -1;
  }

  parseAndReturnCategoryName(selection: MatSelect): string | undefined {
    const categoryEnumName = parseBeforeJsonArray(selection);
    if (categoryEnumName != null)
      this.filterForm.patchValue({ categoryEnumName });
    return categoryEnumName;
  }
}
