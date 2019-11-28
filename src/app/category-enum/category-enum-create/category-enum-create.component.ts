import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CategoryEnumService } from '../../../api/category-enum/category-enum.service';
import { ICategoryEnum } from '../../../api/category-enum/category-enum.interfaces';
import { removeFalseyProperties } from '../../../utils';
import { AlertsService } from '../../alerts/alerts.service';


@Component({
  selector: 'app-category-enum-create',
  templateUrl: './category-enum-create.component.html',
  styleUrls: ['./category-enum-create.component.css']
})
export class CategoryEnumCreateComponent {
  @ViewChild('enumerationOption') enumerationOption: ElementRef<HTMLInputElement>; // HTMLInputElement
  createForm = this.fb.group({
    name: ['', Validators.required],
    enumeration: this.fb.array([], [Validators.required]),
    createdAt: [''],
    updatedAt: ['']
  });

  constructor(private fb: FormBuilder,
              private alertsService: AlertsService,
              private categoryEnumService: CategoryEnumService) { }

  submit() {
    if (this.enumerationOption == null || !this.enumerationOption.nativeElement.value) return;

    const categoryEnum: ICategoryEnum = removeFalseyProperties(this.createForm.value) as unknown as ICategoryEnum;
    if (categoryEnum == null || !this.createForm.valid) {
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

  addEnumeration(enumerationOption: HTMLInputElement) {
    if (!enumerationOption.value) return;
    const enumeration = this.createForm.get('enumeration').value;
    enumeration.push(enumerationOption.value);
    enumerationOption.value = null;
    this.createForm.patchValue([{enumeration}]);
  }
}