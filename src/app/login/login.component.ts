import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { LoginRequest } from '../models/login-request';
import { Session } from '../models/session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private sessionService: SessionService, private router: Router) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      privacy: [false, Validators.required]
    });
  }

  login() {
    console.log('Log In Form', this.loginForm.value);
    let request: LoginRequest;
    request = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      locale: 'it'
    };

    this.sessionService.login(request).subscribe(
      (response: Session) => {
        console.log('Response:', response);
        sessionStorage.setItem('accessToken', response.accessToken);
        sessionStorage.setItem('refreshToken', response.refreshToken);
        this.router.navigate(['home']);
      },
      error => console.error('Error on response', error)
    );
  }

}
