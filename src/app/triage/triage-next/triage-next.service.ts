import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

import { AlertsService } from '../../alerts/alerts.service';

@Injectable({
  providedIn: 'root'
})
export class TriageNextService {
  changeDetected$ = new BehaviorSubject<boolean>(false);

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alertsService: AlertsService) {}

  next(nextLocation?: string) {
    this.router
      .navigate(['/', 'triage'].concat(nextLocation || []))
      .then(() => this.changeDetected$.next(true))
      .catch(this.alertsService.add.bind(this.alertsService));
  }

  getNext(): Observable<boolean> {
    return this.changeDetected$.asObservable();
  }
}
