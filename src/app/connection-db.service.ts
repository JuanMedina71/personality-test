import { Injectable } from '@angular/core';
import { Auth, User, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class ConnectionDBService {
  functions: any;

  constructor(private auth: Auth) { }

  register({email, password}: {email: string, password: string}) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login({email, password}: {email: string, password: string}) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  sendVerificationCode(email: string) {
    const user = this.auth.currentUser;
    if(user) {
      return sendEmailVerification(user, {url: 'https://insightiq-8a302.firebaseapp.com/__/auth/action?mode=action&oobCode=code'});
    } else {
      return Promise.reject('User not logged in')
    }
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }



}
