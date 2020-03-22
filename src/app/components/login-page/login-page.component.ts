import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import { LoginRequest } from 'src/app/models/login-request';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const request: LoginRequest = {...this.loginForm.value, locale: 'it'};

    console.log(request);
    this.sessionService.login(request);
  }

}
