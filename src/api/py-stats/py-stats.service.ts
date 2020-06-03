import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class PyStatsService {
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get('/api/py/stats');
  }
}
