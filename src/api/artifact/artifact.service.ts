import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { parseDates } from '../shared';
import { IArtifact } from './artifact.interfaces';

@Injectable()
export class ArtifactService {
  constructor(private http: HttpClient) {
  }

  create(artifact: IArtifact): Observable<IArtifact> {
    return this.http
      .post<IArtifact>('/api/artifact', artifact)
      .pipe(map(parseDates));
  }

  read(artifactLocation: IArtifact['location']): Observable<IArtifact> {
    return this.http
      .get<IArtifact>(`/api/artifact/${artifactLocation}`)
      .pipe(map(parseDates));
  }

  update(artifact: Partial<IArtifact>, artifactLocation: IArtifact['location']): Observable<IArtifact> {
    return this.http
      .put<IArtifact>(`/api/artifact/${artifactLocation}`, artifact)
      .pipe(map(parseDates));
  }

  destroy(artifactLocation: IArtifact['location']): Observable<{}> {
    return this.http
      .delete(`/api/artifact/${artifactLocation}`);
  }

  getAll(): Observable<IArtifact[]> {
    return this.http
      .get<{artifacts: IArtifact[]}>('/api/artifact')
      .pipe(
        map(artifacts => artifacts.artifacts),
        map(artifacts => artifacts.map(parseDates))
      );
  }
}
