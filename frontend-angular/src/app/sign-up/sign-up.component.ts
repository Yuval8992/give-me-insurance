import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../shared/auth.service';
import { PasswordValidator } from './password-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../sign-in/sign-in.component.css', './sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.signUpForm = this.formBuilder.group(
      {
        'שם מלא': ['', [Validators.required, Validators.minLength(2)]],
        אימייל: ['', [Validators.required, Validators.email]],
        סיסמא: ['', [Validators.required, Validators.minLength(8)]],
        'אישור סיסמא': ['', [Validators.required, Validators.minLength(8)]],
      },
      { validator: PasswordValidator.MatchPassword }
    );
  }

  public hasError(controlName: string, errorName: string) {
    return this.signUpForm.controls[controlName].hasError(errorName);
  }

  public onSubmit(values) {
    this.dataStorageService
      .signUp(this.authService.processData(values))
      .subscribe(
        (data) => this.authService.handleResponse(data),
        (error) => this.authService.handleError(error)
      );
  }
}
