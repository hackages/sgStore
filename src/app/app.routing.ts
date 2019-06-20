import { CustomPreloadingStrategy } from './services/custom.strategy';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './AuthModule/auth.module#AuthModule'
  },

  {
    path: 'books',
    loadChildren: './BookModule/book.module#BookModule',
    data: {
      load: true,
      delay: 3000
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy
    })
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
