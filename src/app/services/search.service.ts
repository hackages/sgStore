import { switchMap, startWith } from 'rxjs/operators';
import { SearchByTitleUrl } from './constant.service';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private http: HttpClient,
    @Inject(SearchByTitleUrl.provide) private searchByTitleUrl: string
  ) {}

  search(term$: Observable<string>): Observable<Book[]> {
    return term$.pipe(
      startWith(''),
      switchMap(term => this.http.get<Book[]>(this.searchByTitleUrl + term))
    );
  }
}
