import { Component, OnInit } from '@angular/core';

import { CategoriseService } from '../../api/categorise/categorise.service';
import { ICategoriseStats } from '../../api/categorise/categorise.interfaces';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  public aggStats: ICategoriseStats[];
  public at: string = localStorage.getItem('access-token');

  constructor(private categoriseService: CategoriseService) { }

  ngOnInit(): void {
    this.categoriseService.getAggStats().subscribe(
      aggStats => this.aggStats = aggStats
    );
  }

  downloadCategoriseCsv() {
    this.categoriseService.getAllStats().subscribe(r => {
      const blob = new Blob([r.csv], {type: 'text/csv'});

      const link = window.document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'export.csv';
      link.click();
      window.document.body.removeChild(link);
    })
  }
}
