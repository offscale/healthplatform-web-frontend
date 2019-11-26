import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message, action = 'Ok', duration = 5000 /* 5 seconds */) {
    this.snackBar.open(message, action, { duration });
  }
}
