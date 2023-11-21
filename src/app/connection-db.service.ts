import { Injectable } from '@angular/core';
import { Auth, User, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConnectionDBService {
  functions: any;

  constructor(private auth: Auth, private firestore: Firestore) { }

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

  getDatosPorNombre(nombre: string): Observable<any[]> {
    const q = query(collection(this.firestore, 'testP'), where('nombre', '==', nombre));
    return new Observable((observer) => {
      getDocs(q).then((querySnapshot) => {
        const datos = querySnapshot.docs.map((doc) => doc.data());
        observer.next(datos);
        observer.complete();
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

  getDatosPorNombreVark(nombre: string): Observable<any[]> {
    const q = query(collection(this.firestore, 'testV'), where('nombre', '==', nombre));
    return new Observable((observer) => {
      getDocs(q).then((querySnapshot) => {
        const datos = querySnapshot.docs.map((doc) => doc.data());
        observer.next(datos);
        observer.complete();
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  

  


}
