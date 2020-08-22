import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.authService.authStatus.subscribe((value) => (this.loggedIn = value));
  }

  ngOnInit(): void {}

  logout(event) {
    event.preventDefault();
    this.tokenService.remove();
    this.authService.changeAuthStatus(false);
    this.router.navigate(['/sign-in']);
  }
}
