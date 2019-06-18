import { AuthGuard } from './services/auth.guard';
import { Routes } from '@angular/router';
import { BookResolve } from './services/book.resolve';
import {
  LoginComponent,
  DashboardComponent,
  BookDetailComponent
} from './components';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  // { path: '**', component: NotFoundComponent },
  {
    path: 'books/:bookId',
    component: BookDetailComponent,
    canActivate: [AuthGuard],
    resolve: {
      book: BookResolve
    }
  }
];
