import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [NgClass],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  selectedRole: 'jobseeker' | 'employer' = 'jobseeker';
  email = '';
  password = '';
  rememberMe = false;

  selectRole(role: 'jobseeker' | 'employer') {
    this.selectedRole = role;
  }

  onSubmit() {
    // Handle login logic here
    // You can use this.selectedRole, this.email, this.password, this.rememberMe
    // Example: call an auth service
  }
}
