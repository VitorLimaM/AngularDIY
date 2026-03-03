import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-secret',
  template: `
    <div style="margin-top: 15px;">
      @if (hasAccess) {
        <p>The secret is that your password is: <strong>{{ secretPass }}</strong>. Keep it in secret!</p>
      } @else {
        <p>You dont have permissions to see the secret.</p>
      }
    </div>
  `
})
export class SecretComponent implements OnInit {
  hasAccess = false;
  secretPass = '';

  ngOnInit() {
    const user = localStorage.getItem('user');
    const pass = localStorage.getItem('password');

    if (user && pass) {
      this.hasAccess = true;
      this.secretPass = pass;
    }
  }
}