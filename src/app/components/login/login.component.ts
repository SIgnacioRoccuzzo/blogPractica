import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      // Aquí iría la lógica de autenticación
      if (email === 'test@example.com' && password === 'password') {
        // Simulación de inicio de sesión exitoso
        this.router.navigate(['/']);
      } else {
        alert('Invalid credentials');
      }
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
