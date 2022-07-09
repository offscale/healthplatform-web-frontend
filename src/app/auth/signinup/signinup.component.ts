import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { IAuthReq, ILoginResp } from '../../../api/auth/auth.interfaces';
import { AuthService } from '../../../api/auth/auth.service';
import { AlertsService } from '../../alerts/alerts.service';
import { getRedirectUrl } from '../../app-routing.module';


@Component({
  selector: 'app-signinup',
  templateUrl: './signinup.component.html',
  styleUrls: ['./signinup.component.css']
})
export class SigninupComponent implements OnInit, AfterViewInit {
  auth = new UntypedFormControl();
  form: UntypedFormGroup;

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              public authService: AuthService,
              private alertsService: AlertsService) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    if (AuthService.loggedIn())
      this.router
        .navigateByUrl((v => v == null ? '/secret-dashboard' : v)(getRedirectUrl(location.href)))
        .then(() => {});
  }

  signInUp() {
    this.authService
      .signinup(this.form.value as IAuthReq)
      .subscribe((user: IAuthReq | ILoginResp) => {
          if (user.hasOwnProperty('access_token')) {
            this.authService._login(user as ILoginResp);
            this.router.navigateByUrl((v => v == null ? '/secret-dashboard' : v)(getRedirectUrl(location.href)))
              .then(() => {})
              .catch(console.error);
          } else this.alertsService.add(`Unexpected: ${JSON.stringify(user)};`);
        }
      );
  }
}
