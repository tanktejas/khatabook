import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth'
import { getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class FireauthService {
  auth1:any;
  // user:any = this.auth1.currentUser;
  ngOnInit()
  {
    this.auth1=getAuth();
  }

  constructor(private auth:AngularFireAuth) {
   }

  signinwithgoogle()
  {
    return this.auth.signInWithPopup(new GoogleAuthProvider())
  }

  regwithemailandpass(user:any)
  {
    return this.auth.createUserWithEmailAndPassword(user.email,user.pass);
  }

  signinwithemailandpass(user:any)
  {
    return this.auth.signInWithEmailAndPassword(user.email,user.pass);
  }

  getuser()
  {
    return this.auth.currentUser;
  }

  logout()
  {
    return this.auth.signOut();
  }
}
