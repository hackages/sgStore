import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private router: Router) {
    this.form = new FormGroup({
      username: new FormControl('d@hackages.io'),
      password: new FormControl('mdfkjsmfamkj', [
        Validators.required,
        Validators.email
      ])
    });
  }
  login() {
    localStorage.setItem('token', 'fdmlfjeafaeezflajfz');
    this.router.navigate(['dashboard']);
  }
}
