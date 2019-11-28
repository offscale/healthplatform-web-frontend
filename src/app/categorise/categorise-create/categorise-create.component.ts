import { Component } from '@angular/core';

import { CategoriseService } from '../../../api/categorise/categorise.service';
import { AlertsService } from '../../alerts/alerts.service';
import { FormBuilder, Validators } from '@angular/forms';
import { removeFalseyProperties } from '../../../utils';
import { ICategorise } from '../../../api/categorise/categorise.interfaces';

@Component({
  selector: 'app-categorise-create',
  templateUrl: './categorise-create.component.html',
  styleUrls: ['./categorise-create.component.css']
})
export class CategoriseCreateComponent {
  createForm = this.fb.group({
    id: [''],
    artifact: ['', Validators.required],
    category: ['', Validators.required],
    username: [''],
    createdAt: [''],
    updatedAt: ['']
  });

  constructor(private fb: FormBuilder,
              private alertsService: AlertsService,
              private categoriseService: CategoriseService) { }

  submit() {
    const categorise: ICategorise = removeFalseyProperties(this.createForm.value) as unknown as ICategorise;
    if (categorise == null || !this.createForm.valid) {
      this.alertsService.add('Invalid form');
      return;
    }
    this.categoriseService
      .create(categorise)
      .subscribe(
        createdCategorise => this.alertsService.add(`Added ${createdCategorise.id}`),
        this.alertsService.add.bind(this.alertsService)
      );
  }
}
