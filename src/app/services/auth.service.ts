import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  async register(credentials: { email: string; password: string }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        credentials.email,
        credentials.password
      );
      return user;
    } catch (error) {
      return null;
    }
  }

  async login(credentials: { email: string; password: string }) {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        credentials.email,
        credentials.password
      );
      return user;
    } catch (error) {
      return null;
    }
  }

  logout() {
    signOut(this.auth);
  }
}
