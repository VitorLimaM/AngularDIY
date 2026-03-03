import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [FormsModule],
  template: `
    <div style="margin-top: 15px;">
      <input [(ngModel)]="username" placeholder="User Name" style="display: block; margin-bottom: 5px;">
      <input [(ngModel)]="password" type="password" placeholder="Password" style="display: block; margin-bottom: 10px;">
      <button (click)="save()">Register</button>
    </div>
  `
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  save() {
    localStorage.setItem('user', this.username);
    localStorage.setItem('password', this.password);
    alert('Registrado com sucesso!');
    
    this.router.navigate(['/secret-component']);
  }
}