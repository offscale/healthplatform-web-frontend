import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IPyServerStatus } from './py-server-status.interfaces';

@Injectable()
export class PyServerStatusService {
  constructor(private http: HttpClient) {}

  get(): Observable<IPyServerStatus> {
    return this.http.get<IPyServerStatus>('/api/py');
  }
}
