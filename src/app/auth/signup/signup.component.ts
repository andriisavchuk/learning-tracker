import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  /**
   * Adds user data.
   * @param form The object with user data from Registration Form.
   */
  onSubmit(form: NgForm) {
    console.log(form);

    this.authService.signupUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}
