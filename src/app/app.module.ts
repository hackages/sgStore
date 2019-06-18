import { BookResolve } from './services/book.resolve';
import { RouterModule } from '@angular/router';
// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

// Services
import {
  SearchService,
  SearchByTitleUrl,
  BookService,
  InMemoryDataService
} from './services';

// Components
import {
  BookDetailComponent,
  BsBookInputComponent,
  AppComponent,
  BsBooksComponent,
  BsHeaderComponent,
  DashboardComponent
} from './components';

// routing
import { routes } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    BsBookInputComponent,
    BsBooksComponent,
    BsHeaderComponent,
    BookDetailComponent,
    DashboardComponent
  ],
  providers: [BookService, SearchByTitleUrl, SearchService, BookResolve],
  bootstrap: [AppComponent]
})
export class AppModule {}
