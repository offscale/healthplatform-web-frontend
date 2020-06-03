import { Component, OnInit } from '@angular/core';
import { PyStatsService } from '../../api/py-stats/py-stats.service';

@Component({
  selector: 'app-ml-dashboard',
  templateUrl: './ml-dashboard.component.html',
  styleUrls: ['./ml-dashboard.component.css']
})
export class MlDashboardComponent implements OnInit {
  stats: any;

  constructor(private pyStatsService: PyStatsService) { }

  ngOnInit(): void {
    this.pyStatsService.get().subscribe(
      stats =>
        this.stats = stats
    )
  }

}
