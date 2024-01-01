import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { env } from './enviroment/env.prod';

import * as firebase from 'firebase/app';
import 'firebase/firestore'; // Import other Firebase modules as needed


firebase.initializeApp(env.firebaseConfig); // Initialize Firebase



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // real content
  //temp content
  //permanent content
  //correction f1
  //ko
  //feature 2 ok
