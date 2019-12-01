import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { IArtifact } from '../../../api/artifact/artifact.interfaces';
import { ICategorise } from '../../../api/categorise/categorise.interfaces';
import { ArtifactService } from '../../../api/artifact/artifact.service';
import { CategoriseService } from '../../../api/categorise/categorise.service';
import { parseLocation } from '../../artifacts/artifacts.utils';

import { AlertsService } from '../../alerts/alerts.service';


@Component({
  selector: 'app-triage-next',
  templateUrl: './triage-next.component.html',
  styleUrls: ['./triage-next.component.css']
})
export class TriageNextComponent implements AfterViewInit {
  artifactsLeft: IArtifact[];
  artifacts: IArtifact[];
  categorises: ICategorise[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private artifactService: ArtifactService,
              private categoriseService: CategoriseService,
              private alertsService: AlertsService) { }

  ngAfterViewInit() {
    forkJoin([
      this.artifactService
        .getAll()
        .pipe(
          map(artifacts => artifacts.map(parseLocation))
        ),
      this.artifactService
        .getNext()
        .pipe(
          map(artifacts => artifacts.map(parseLocation))
        ),
      this.categoriseService
        .getAll()
    ])
      .subscribe((result: [IArtifact[], IArtifact[], ICategorise[]]) =>
        [this.artifactsLeft, this.artifacts, this.categorises] = result
      );
  }

  next() {
    const currentPath = this.route.snapshot.url;

    const nextLocation = currentPath.length === 0 ?
      this.artifactsLeft[0]._unparsedLocation
      : (() => {
        for (let i = 0; i + 1 < this.artifactsLeft.length; i++)
          if (this.artifactsLeft[i]._unparsedLocation === currentPath[0].path)
            return this.artifactsLeft[i + 1]._unparsedLocation;
      })();

    this.router
      .navigate(['/', 'triage'].concat(nextLocation || []))
      .then(() => {})
      .catch(this.alertsService.add.bind(this.alertsService));
  }
}
