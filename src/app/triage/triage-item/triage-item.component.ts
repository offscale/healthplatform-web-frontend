import { Component, OnInit } from '@angular/core';
import { IArtifact } from '../../../api/artifact/artifact.interfaces';
import { ICategorise } from '../../../api/categorise/categorise.interfaces';
import { ArtifactService } from '../../../api/artifact/artifact.service';
import { CategoriseService } from '../../../api/categorise/categorise.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-triage-item',
  templateUrl: './triage-item.component.html',
  styleUrls: ['./triage-item.component.css']
})
export class TriageItemComponent implements OnInit {
  artifactsLeft: IArtifact[];
  artifacts: IArtifact[];
  categorises: ICategorise[];

  constructor(private artifactService: ArtifactService,
              private categoriseService: CategoriseService) { }

  ngOnInit() {
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
}
