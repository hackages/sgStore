import { AuthGuard } from './AuthModule/services/auth.guard';
import { Routes } from '@angular/router';
import { BookResolve } from './services/book.resolve';
import { DashboardComponent, BookDetailComponent } from './components';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './AuthModule/auth.module#AuthModule'
  },

  // { path: '**', component: NotFoundComponent },
  {
    path: 'books/:bookId',
    component: BookDetailComponent,
    // canActivate: [AuthGuard],
    resolve: {
      book: BookResolve
    }
  }
];
