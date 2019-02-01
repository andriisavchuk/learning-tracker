import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { error } from '@angular/compiler/src/util';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router, private angFireAuth: AngularFireAuth) {}

  /**
   * Registers new user.
   * @param authData The object with user data.
   */
  signupUser(authData: AuthData) {
    this.angFireAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.router.navigate(['/login']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  /**
   * Signs in user.
   * @param authData The object with user data.
   */
  login(authData: AuthData) {
    this.angFireAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.authChange.next(true);
        this.router.navigate(['/learning']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  /**
   * Logs out user.
   */
  logout() {
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

  /**
   * Gets user object and if there are some changes
   * in data, returns new one.
   */
  // getUser() {
  //   return { ...this.user };
  // }

  /**
   * Returns true or false depends on user authentication status
   */
  isAuth() {
    return this.isAuthenticated;
  }
}
