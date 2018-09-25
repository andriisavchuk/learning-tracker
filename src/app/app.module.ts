import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

import { LearningComponent } from './learning/learning.component';
import { CurrentLearningComponent } from './learning/current-learning/current-learning.component';
import { NewLearningComponent } from './learning/new-learning/new-learning.component';
import { PastLearningsComponent } from './learning/past-learnings/past-learnings.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LearningComponent,
    CurrentLearningComponent,
    NewLearningComponent,
    PastLearningsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
