import { LoginAction } from './../../store/actions';
import { AuthState } from './../../store/state';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bs-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private router: Router, private store: Store<AuthState>) {
    this.form = new FormGroup({
      username: new FormControl('d@hackages.io'),
      password: new FormControl('mdfkjsmfamkj', [
        Validators.required,
        Validators.email
      ])
    });
  }
  login() {
    this.store.dispatch(
      new LoginAction({ username: this.form.get('username').value })
    );
    this.router.navigate(['books']);
  }
}
