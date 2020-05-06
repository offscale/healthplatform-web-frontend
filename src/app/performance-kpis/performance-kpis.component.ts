import { Component, OnInit } from '@angular/core';
import { CategoriseService } from '../../api/categorise/categorise.service';
import { IArtifactCategoriseStats } from '../../api/categorise/categorise.interfaces';
import { parseCategoryEnum } from '../../api/shared';

@Component({
  selector: 'app-performance-kpis',
  templateUrl: './performance-kpis.component.html',
  styleUrls: ['./performance-kpis.component.css']
})
export class PerformanceKpisComponent implements OnInit {
  artifactCategoriseStats: IArtifactCategoriseStats;

  constructor(private categoriseService: CategoriseService) { }

  ngOnInit() {
    this.categoriseService
      .getStats(parseCategoryEnum(localStorage.getItem('defaultCategoryEnum')))
      .subscribe((artifactCategoriseStats: IArtifactCategoriseStats) =>
        this.artifactCategoriseStats = artifactCategoriseStats
      );
  }
}
