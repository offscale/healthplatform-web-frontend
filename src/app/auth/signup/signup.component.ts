import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { IAuthReq } from '../../../api/auth/auth.interfaces';
import { AuthService } from '../../../api/auth/auth.service';
import { AlertsService } from '../../alerts/alerts.service';
import { getRedirectUrl } from '../../app-routing.module';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  auth = new UntypedFormControl();
  form: UntypedFormGroup;

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              public authService: AuthService,
              private alertsService: AlertsService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signup() {
    this.authService
      .register(this.form.value as IAuthReq)
      .subscribe((res: HttpResponse<IAuthReq>) => {
          if (!res.headers.has('x-access-token')) {
            this.alertsService.add('No access token in response');
            return;
          }

          this.authService.accessToken = res.headers.get('x-access-token');
          localStorage.setItem('access-token', this.authService.accessToken);

          this.router
            .navigateByUrl((v => v == null ? '/secret-dashboard' : v)(getRedirectUrl(location.href)))
            .then(() => {});
        }
      );
  }
}
