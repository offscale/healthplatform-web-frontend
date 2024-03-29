import * as mime from 'mime';

import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { ArtifactService } from '../../../api/artifact/artifact.service';
import { IArtifact } from '../../../api/artifact/artifact.interfaces';
import { removeFalseyProperties } from '../../../utils';
import { AlertsService } from '../../alerts/alerts.service';
import { parseLocation } from '../artifacts.utils';


@Component({
  selector: 'app-artifact-create',
  templateUrl: './artifact-create.component.html',
  styleUrls: ['./artifact-create.component.scss']
})
export class ArtifactCreateComponent {
  createForm: UntypedFormGroup = this.fb.group({
    location: ['', Validators.required],
    mimeType: ['application/x-www-form-urlencoded'],
    contentType: ['', Validators.required],
    meta: [''],
    /*
      createdAt: [''],
      updatedAt: ['']
    */
  });

  constructor(private fb: UntypedFormBuilder,
              private alertsService: AlertsService,
              private artifactService: ArtifactService) {

  }

  setContentType() {
    if (this.createForm.get('location') == null) return;
    try {
      const contentType = mime.getType(((p: string) =>
          p.slice(p.lastIndexOf('/') + 1))(
            new URL(this.createForm.get('location').value).pathname
        )
      );

      this.createForm.patchValue({ contentType });
    } catch (e) {
      if (e.message === 'Failed to construct \'URL\': Invalid URL')
        return;
      throw e;
    }
  }

  submit() {
    const artifact: IArtifact = removeFalseyProperties(
      this.createForm.value
    ) as unknown as IArtifact;
    if (artifact == null
      || Object.keys(artifact).length === 0
      || !this.isCreateFormValid()) {
      this.alertsService.add('Invalid form');
      return;
    }

    switch (artifact.mimeType) {
      case 'application/x-www-form-urlencoded':
        artifact.location = encodeURIComponent(artifact.location);
        break;
      default:
        throw TypeError(`Not implemented: ${artifact.mimeType}`);
    }

    this.artifactService
      .create(artifact)
      .subscribe(createdArtifact =>
          this.alertsService.add(`Added ${parseLocation(createdArtifact).location}`),
        this.alertsService.add.bind(this.alertsService)
      );
  }

  isCreateFormValid(): boolean {
    const keys = Object
      .keys(removeFalseyProperties(this.createForm.value))
      .filter(k => this.createForm.value[k].length > 0);
    return keys.length > 0 && keys.indexOf('location') > -1;
  }
}
