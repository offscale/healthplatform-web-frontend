import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { IArtifact } from '../../../api/artifact/artifact.interfaces';
import { ArtifactService } from '../../../api/artifact/artifact.service';
import { CategoriseService } from '../../../api/categorise/categorise.service';
import { parseLocation } from '../../artifacts/artifacts.utils';

import { IArtifactCategoriseStats } from '../../../api/categorise/categorise.interfaces';
import { parseCategoryEnum } from '../../../api/shared';
import { TriageNextService } from './triage-next.service';


@Component({
  selector: 'app-triage-next',
  templateUrl: './triage-next.component.html',
  styleUrls: ['./triage-next.component.css']
})
export class TriageNextComponent implements AfterViewInit {
  artifactsLeft: IArtifact[];
  artifactCategoriseStats: IArtifactCategoriseStats;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private artifactService: ArtifactService,
              private categoriseService: CategoriseService,
              private triageNextService: TriageNextService) { }

  ngAfterViewInit() {
    const defaultCategoryEnum = parseCategoryEnum(localStorage.getItem('defaultCategoryEnum'));
    const defaultNextQuery = localStorage.getItem('nextQuery');
    forkJoin([
      this.categoriseService
        .getNext(defaultCategoryEnum, defaultNextQuery)
        .pipe(
          map(artifacts => artifacts.map(parseLocation))
        ),
      this.categoriseService
        .getStats(defaultCategoryEnum)
    ])
      .subscribe((results: [IArtifact[], IArtifactCategoriseStats]) =>
        [this.artifactsLeft, this.artifactCategoriseStats] = results
      );
  }

  next() {
    this.triageNextService.changeDetected$.next(false);
    const currentPath = this.route.snapshot.url;
    this.triageNextService.next(
      currentPath.length === 0 ?
        this.artifactsLeft[0]._unparsedLocation
        : (() => {
          for (let i = 0; i + 1 < this.artifactsLeft.length; i++)
            if (this.artifactsLeft[i]._unparsedLocation === currentPath[0].path)
              return this.artifactsLeft[i + 1]._unparsedLocation;
        })()
    );
  }
}
