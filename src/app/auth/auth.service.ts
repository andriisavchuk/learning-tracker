import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { LearningService } from '../learning/learning.service';
import { MatSnackBar } from '@angular/material';
import { UiService } from '../shared/ui.service';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private angFireAuth: AngularFireAuth,
    private learningService: LearningService,
    private snackBar: MatSnackBar,
    private uiService: UiService
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
    this.uiService.loadingStateChanged.next(true);
    this.angFireAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.uiService.loadingStateChanged.next(false);
      })
      .catch(err => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackBar(err.message, null, 3000);
      });
  }

  /**
   * Signs in user.
   * @param authData The object with user data.
   */
  login(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.angFireAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.uiService.loadingStateChanged.next(false);
        this.initAuthListener();
      })
      .catch(err => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackBar(err.message, null, 3000);
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
