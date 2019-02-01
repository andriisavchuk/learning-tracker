import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { LearningService } from '../learning/learning.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private angFireAuth: AngularFireAuth,
    private learningService: LearningService,
    private snackBar: MatSnackBar
  ) {}

  /**
   * Authentication listener uses when Application starts.
   * @param authData The object with user data.
   */
  initAuthListener() {
    this.angFireAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/learning']);
      } else {
        this.learningService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  /**
   * Registers new user.
   * @param authData The object with user data.
   */
  signupUser(authData: AuthData) {
    this.angFireAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {})
      .catch(err => {
        this.snackBar.open(err.message, null, {
          duration: 3000
        });
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
        this.initAuthListener();
      })
      .catch(err => {
        this.snackBar.open(err.message, null, {
          duration: 3000
        });
      });
  }

  /**
   * Logs out user.
   */
  logout() {
    this.angFireAuth.auth.signOut();
  }

  /**
   * Returns true or false depends on user authentication status
   */
  isAuth() {
    return this.isAuthenticated;
  }
}
