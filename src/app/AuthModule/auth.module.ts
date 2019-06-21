import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/reducers';
const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', authReducer)
  ],
  exports: [],
  declarations: [LoginComponent]
})
export class AuthModule {}
