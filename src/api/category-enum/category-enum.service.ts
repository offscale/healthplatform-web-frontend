import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { parseDates } from '../shared';
import { ICategoryEnum } from './category-enum.interfaces';

@Injectable()
export class CategoryEnumService {
  private categoryEnums$ = new BehaviorSubject<ICategoryEnum[]>([]);

  constructor(private http: HttpClient) {
  }

  create(categoryEnum: ICategoryEnum): Observable<ICategoryEnum> {
    return this.http
      .post<ICategoryEnum>('/api/category_enum', categoryEnum)
      .pipe(map(parseDates));
  }

  read(categoryEnumName: ICategoryEnum['name']): Observable<ICategoryEnum> {
    return this.http
      .get<ICategoryEnum>(`/api/category_enum/${categoryEnumName}`)
      .pipe(map(parseDates));
  }

  update(categoryEnum: Partial<ICategoryEnum>, categoryEnumName: ICategoryEnum['name']): Observable<ICategoryEnum> {
    return this.http
      .put<ICategoryEnum>(`/api/category_enum/${categoryEnumName}`, categoryEnum)
      .pipe(map(parseDates));
  }

  destroy(categoryEnumName: ICategoryEnum['name']): Observable<{}> {
    return this.http
      .delete(`/api/category_enum/${categoryEnumName}`);
  }

  getAll(): Observable<ICategoryEnum[]> {
    return this.http
      .get<{category_enums: ICategoryEnum[]}>('/api/category_enum')
      .pipe(
        map(categoryEnums => categoryEnums.category_enums),
        map(categoryEnums => categoryEnums.map(parseDates)),
        switchMap(result => {
          this.categoryEnums$.next(result);
          return this.categoryEnums$;
        })
      );
  }

  private refresh() {
    return this.http
      .get<{category_enums: ICategoryEnum[]}>('/api/category_enum')
      .pipe(
        map(categoryEnums => categoryEnums.category_enums),
        map(categoryEnums => categoryEnums.map(parseDates)),
      )
      .subscribe(categoryEnums => this.categoryEnums$.next(categoryEnums));
  }
}
