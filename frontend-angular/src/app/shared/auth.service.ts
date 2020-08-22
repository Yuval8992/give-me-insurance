import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn());
  public authStatus = this.loggedIn.asObservable();

  constructor(private tokenService: TokenService, private router: Router) {}

  public changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  public handleResponse(data) {
    this.tokenService.handle(data.access_token);
    this.changeAuthStatus(true);
    this.router.navigate(['/car-search']);
  }

  public handleError(error) {
    alert(error.error.error);
  }

  public processData(data) {
    return {
      email: data['אימייל'],
      password: data['סיסמא'],
      name: data['שם מלא'],
    };
  }
}
