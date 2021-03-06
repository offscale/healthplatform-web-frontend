import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IArtifact } from '../artifact/artifact.interfaces';
import { parseDates } from '../shared';
import { IArtifactCategoriseStats, ICategorise, ICategoriseStats } from './categorise.interfaces';


@Injectable()
export class CategoriseService {
  public httpParams: HttpParams;

  constructor(private http: HttpClient) {
    this._setHttpParamsFromLocalStorage();
  }

  create(categorise: ICategorise, httpOptions?: {params: HttpParams}): Observable<ICategorise> {
    return this.http
      .post<ICategorise>('/api/categorise', categorise,
        httpOptions == null || httpOptions.params == null ? {} : { params: httpOptions.params })
      .pipe(map(parseDates));
  }

  read(categoriseId: ICategorise['id']): Observable<ICategorise> {
    return this.http
      .get<ICategorise>(`/api/categorise/${categoriseId}`)
      .pipe(map(parseDates));
  }

  update(categorise: Partial<ICategorise>,
         categoriseId: ICategorise['id']): Observable<ICategorise> {
    return this.http
      .put<ICategorise>(`/api/categorise/${categoriseId}`, categorise)
      .pipe(map(parseDates));
  }

  destroy(categoriseId: ICategorise['id']): Observable<{}> {
    return this.http
      .delete(`/api/categorise/${categoriseId}`);
  }

  getAll(): Observable<ICategorise[]> {
    return this.http
      .get<{categorises: ICategorise[]}>('/api/categorise',
        this.httpParams == null ? {} : { params: this.httpParams }
      )
      .pipe(
        map(categorises => categorises.categorises),
        map(categorises => categorises.map(parseDates))
      );
  }

  getStats(categoryEnumName: string): Observable<IArtifactCategoriseStats> {
    return this.http
      .get<IArtifactCategoriseStats>('/api/categorise/stats',
        { params: { categoryEnumName } }
      );
  }

  getAllStats(): Observable<{csv: string}> {
    return this.http
      .get<{csv: string}>('/api/categorise/csv');
  }

  getAggStats(): Observable<ICategoriseStats[]> {
    return this.http
      .get<{categorise_agg_stats: ICategoriseStats[]}>('/api/categorise/agg_stats')
      .pipe(map(aggStats => aggStats.categorise_agg_stats));
  }

  getNext(categoryEnumName: string, nextQuery: string): Observable<IArtifact[]> {
    return this.http
      .get<{artifacts: IArtifact[]}>('/api/categorise/next',
        { params: { categoryEnumName, nextQuery } }
      )
      .pipe(
        map(artifacts => artifacts.artifacts),
        map(artifacts => artifacts.map(parseDates))
      );
  }

  _setHttpParamsFromLocalStorage() {
    const categoriseServiceFilterForm = localStorage.getItem('categoriseServiceFilterForm');
    if (categoriseServiceFilterForm != null)
      this.httpParams = new HttpParams({ fromObject: JSON.parse(categoriseServiceFilterForm) });
  }
}
