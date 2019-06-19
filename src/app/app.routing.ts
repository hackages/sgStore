import { Routes } from '@angular/router';

import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

Injectable();
export class CustomPreloadingStrategy implements PreloadingStrategy {
  constructor() {}
  preload(route: Route, load: Function): Observable<any> {
    console.log('routes....', route);
    return route.data && route.data.preload ? load(route.data.delay) : of(null);
  }
}

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
      delay: 3000,
      rules() {}
    }
  },
  {
    path: 'cars',
    loadChildren: './BookModule/book.module#BookModule'
  }
];
