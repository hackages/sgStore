import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { BookResolve } from './services/book.resolve';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'login', component: null },
  // { path: '**', component: NotFoundComponent },
  {
    path: 'books/:bookId',
    component: BookDetailComponent,
    resolve: {
      book: BookResolve
    }
  }
];
