import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1>Welcome!</h1>
      <ul style="list-style-type: disc; padding-left: 40px;">
        <li><a routerLink="/register-component" style="color: indigo;">Register Component</a></li>
        <li><a routerLink="/secret-component" style="color: indigo;">Secret Component</a></li>
      </ul>

      <hr style="margin: 20px 0;">

      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}