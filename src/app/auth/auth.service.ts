import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) {}

  /**
   * Registers new user.
   * @param authData The object with user data.
   */
  signupUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      // Generates fake user ID
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.router.navigate(['/login']);
  }

  /**
   * Signs in user.
   * @param authData The object with user data.
   */
  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
    this.router.navigate(['/learning']);
  }

  /**
   * Logs out user.
   */
  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  /**
   * Gets user object and if there are some changes
   * in data, returns new one.
   */
  getUser() {
    return { ...this.user };
  }

  /**
   * Returns true or false depends on user authentication status
   */
  isAuth() {
    return this.user !== null;
  }
}
