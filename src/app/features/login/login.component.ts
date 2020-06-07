import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';
import { LoginRequest } from 'src/app/models/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
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

    this.loginForm.valueChanges.subscribe(
      values => this.wrongCredentials ? this.wrongCredentials = false : null
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
