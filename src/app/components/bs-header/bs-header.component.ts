import { AppState } from './../../state';
import { AuthState } from './../../AuthModule/store/state';
import { Store, select } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-bs-header',
  template: `
    <h1>{{ title }}</h1>
    <h1>{{ username$ | async }}</h1>
    <hr />
  `
})
export class BsHeaderComponent {
  @Input('titleFromParent')
  title: string;
  username$: Observable<string> = of('');
  constructor(private store: Store<AppState>) {
    this.username$ = this.store
      .select(state => state.auth && state.auth.username)
      .pipe(tap(console.log));
  }
}
