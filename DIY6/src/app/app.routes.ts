import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register';
import { SecretComponent } from './secret/secret';     

export const routes: Routes = [
  { path: 'register-component', component: RegisterComponent },
  { path: 'secret-component', component: SecretComponent },
  { path: '', redirectTo: 'register-component', pathMatch: 'full' }
];