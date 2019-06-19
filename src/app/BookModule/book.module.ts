import { BookService } from './services/books.service';
import { Routes, RouterModule } from '@angular/router';
import { InMemoryDataService, SearchService } from './services';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {
  DashboardComponent,
  BookDetailComponent,
  BooksComponent,
  BookInputComponent
} from './components';
import { SearchByTitleUrl, BookResolve } from './services';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: ':bookId',
    component: BookDetailComponent,
    resolve: {
      book: BookResolve
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    DashboardComponent,
    BookDetailComponent,
    BooksComponent,
    BookInputComponent
  ],
  providers: [SearchByTitleUrl, BookResolve, SearchService, BookService]
})
export class BookModule {}
