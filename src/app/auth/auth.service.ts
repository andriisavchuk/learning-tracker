import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

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
    this.authChange.next(true);
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
  }

  /**
   * Logs out user.
   */
  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  /**
   * Gets user object and if there are some changes
   * in data, returns new one.
   */
  getUser() {
    return { ...this.user};
  }

  /**
   * Returns true or false depends on user authentication status
   */
  isAuth() {
    return this.user !== null;
  }
}
