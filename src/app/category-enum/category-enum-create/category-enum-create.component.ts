import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatSelectionListChange } from '@angular/material';

import { CategoryEnumService } from '../../../api/category-enum/category-enum.service';
import { ICategoryEnum } from '../../../api/category-enum/category-enum.interfaces';
import { removeFalseyProperties } from '../../../utils';
import { AlertsService } from '../../alerts/alerts.service';


@Component({
  selector: 'app-category-enum-create',
  templateUrl: './category-enum-create.component.html',
  styleUrls: ['./category-enum-create.component.scss']
})
export class CategoryEnumCreateComponent {
  createForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    enumeration: new FormControl([], [Validators.required]),
    /*
      createdAt: [''],
      updatedAt: ['']
    */
  });

  constructor(private fb: FormBuilder,
              private alertsService: AlertsService,
              private categoryEnumService: CategoryEnumService) { }

  submit() {
    const categoryEnum: ICategoryEnum = removeFalseyProperties(this.createForm.value) as unknown as ICategoryEnum;
    if (categoryEnum == null
      || Object.keys(categoryEnum).length === 0
      || !this.isCreateFormValid()) {
      this.alertsService.add('Invalid form');
      return;
    }
    this.categoryEnumService
      .create(categoryEnum)
      .subscribe(
        createdCategorise => this.alertsService.add(`Added ${createdCategorise.name}`),
        this.alertsService.add.bind(this.alertsService)
      );
  }

  addEnumeration(enumerationInput: HTMLInputElement) {
    if (enumerationInput == null || !enumerationInput.value) return;

    const enumeration = this.createForm.get('enumeration').value;
    enumeration.push(enumerationInput.value);
    this.createForm.patchValue([{ enumeration }]);
    enumerationInput.value = null;
    this.createForm.updateValueAndValidity();
    this.createForm.markAllAsTouched();
    this.createForm.updateValueAndValidity({ onlySelf: false, emitEvent: true });
  }

  isCreateFormValid(): boolean {
    const keys = Object
      .keys(removeFalseyProperties(this.createForm.value))
      .filter(k => this.createForm.value[k].length > 0);
    return keys.length > 1;
  }

  enumerationSelectionChange(change: MatSelectionListChange) {
    // TODO: Remove this debug stuff
    console.info('change:', change, ';');
    // this.enumerationSelectionList
    // this.enumerationSelectionList.options.map(o => o.value).filter(v => v!==)
    function censor(censorF: any) {
      let i = 0;

      return (key, value) => {
        if (i !== 0 && typeof (censorF) === 'object' && typeof (value) === 'object' && censorF === value)
          return '[Circular]';

        if (i >= 29) // seems to be a harded maximum of 30 serialized objects?
          return '[Unknown]';

        ++i; // so we know we aren't using the original object anymore

        return value;
      };
    }

    function simpleStringify(object: any): string {
      const simpleObject = {};
      for (const prop in object) {
        if (!object.hasOwnProperty(prop)) {
          continue;
        }
        if (typeof (object[prop]) === 'object') {
          continue;
        }
        if (typeof (object[prop]) === 'function') {
          continue;
        }
        simpleObject[prop] = object[prop];
      }
      return JSON.stringify(simpleObject, null, 4); // returns cleaned up JSON
    }

    for (const key of Object.keys(change)) {
      try {
        console.info(key, ':', JSON.stringify(change[key], null, 4), ';');
      } catch (e) {
        //
      }
      for (const k of Object.keys(change[key])) {
        try {
          console.info(key, k, ':', JSON.stringify(change[key][k], null, 4), ';');
        } catch (e) {
          //
        }
      }
    }

    console.info('change.option.value:', change.option.value, ';');
  }
}
