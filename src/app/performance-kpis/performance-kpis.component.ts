import { Component, OnInit } from '@angular/core';
import { ArtifactService } from '../../api/artifact/artifact.service';
import { CategoriseService } from '../../api/categorise/categorise.service';
import { IArtifact } from '../../api/artifact/artifact.interfaces';
import { forkJoin } from 'rxjs';
import { ICategorise } from '../../api/categorise/categorise.interfaces';

@Component({
  selector: 'app-performance-kpis',
  templateUrl: './performance-kpis.component.html',
  styleUrls: ['./performance-kpis.component.css']
})
export class PerformanceKpisComponent implements OnInit {
  artifactsLeft: IArtifact[];
  artifacts: IArtifact[];
  categorises: ICategorise[];

  constructor(private artifactService: ArtifactService,
              private categoriseService: CategoriseService) { }

  ngOnInit() {
    forkJoin([
      this.categoriseService
          .getNext(),
      this.artifactService
        .getAll(),
      this.categoriseService
        .getAll()
    ])
      .subscribe((result: [IArtifact[], IArtifact[], ICategorise[]]) =>
        [this.artifactsLeft, this.artifacts, this.categorises] = result
      );
  }
}
