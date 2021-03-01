import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({ providedIn: 'root' })
export class AuthService {
    user$ = this.auth.authState;
    constructor(private auth: AngularFireAuth, private router: Router) {}

    async login() {
        try {
            await this.auth.signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            );
            this.router.navigate(['']);
        } catch {
            // TODO: add error hand
        }
    }
    async logout() {
        try {
            await this.auth.signOut();
            this.router.navigate(['']);
        } catch {
            // TODO: add error hand
        }
    }
}
