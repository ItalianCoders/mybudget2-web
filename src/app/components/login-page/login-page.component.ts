import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import { LoginRequest } from 'src/app/models/login-request';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  wrongCredentials: boolean;

  private errorSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.errorSubscription = this.sessionService.error.subscribe(
      response => this.wrongCredentials = response
    );
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

  login() {
    if (this.loginForm.valid) {
      const request: LoginRequest = {...this.loginForm.value, locale: 'it'};

      console.log(request);
      this.sessionService.login(request);
    }
  }

}
