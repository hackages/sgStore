import { Component, ViewEncapsulation } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { SearchService } from '../../services/search.service';
import { Book } from './../../models/book';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.css'],
  template: `
    <!-- Start: Search component -->
    <app-bs-search [searchTerm$]="seachTerm$"></app-bs-search>
    <!-- End: Search component -->

    <!-- Start: List of books component -->
    <app-bs-books [books]="books$ | async"></app-bs-books>
    <!-- End: List of books component -->
  `,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  seachTerm$: Subject<string> = new Subject();
  books$: Observable<Book[]>;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.books$ = this.searchService.search(this.seachTerm$);
  }
}
