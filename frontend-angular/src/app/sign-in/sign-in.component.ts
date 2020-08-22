import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../shared/auth.service';

@Injectable()
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.signInForm = this.formBuilder.group({
      אימייל: ['', [Validators.required, Validators.email]],
      סיסמא: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public hasError(controlName: string, errorName: string) {
    return this.signInForm.controls[controlName].hasError(errorName);
  }

  public onSubmit(values) {
    this.dataStorageService
      .login(this.authService.processData(values))
      .subscribe(
        (data) => this.authService.handleResponse(data),
        (error) => this.authService.handleError(error)
      );
  }
}
