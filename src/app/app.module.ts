import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth/auth.service';
import { LearningService } from './learning/learning.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

import { LearningComponent } from './learning/learning.component';
import { CurrentLearningComponent } from './learning/current-learning/current-learning.component';
import { NewLearningComponent } from './learning/new-learning/new-learning.component';
import { PastLearningsComponent } from './learning/past-learnings/past-learnings.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { StopLearningComponent } from './learning/current-learning/stop-learning.component.';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LearningComponent,
    CurrentLearningComponent,
    NewLearningComponent,
    PastLearningsComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    StopLearningComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AuthService, LearningService],
  bootstrap: [AppComponent],
  entryComponents: [StopLearningComponent]
})
export class AppModule {}
