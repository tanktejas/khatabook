import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule,AngularFirestore } from '@angular/fire/compat/firestore';
import {env} from '../enviroment/env.prod'
import { HttpClientModule } from '@angular/common/http'
// import {} from 'firebase';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FireauthService } from './services/fireauth.service';
import { DiaryComponent } from './diary/diary.component';
import { PersondiaryComponent } from './persondiary/persondiary.component';
import { HistoryComponent } from './history/history.component'; 
import { CommonModule } from '@angular/common';

// firebase.initializeApp(env.firebaseConfig)
// firebase.default.initializeApp(env.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    DiaryComponent,
    PersondiaryComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  // providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
