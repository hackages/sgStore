import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [LoginComponent]
})
export class AuthModule {}
