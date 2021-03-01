import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({ providedIn: 'root' })
export class AuthService {
    user$ = this.auth.authState;
    constructor(
        private auth: AngularFireAuth,
        private router: Router,
        private snackBar: MatSnackBar
    ) {}

    async login() {
        try {
            await this.auth.signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            );
            this.router.navigateByUrl('/');
            this.snackBar.open('Login success.')
        } catch {
            // TODO: add error hand
        }
    }
    async logout() {
        try {
            await this.auth.signOut();
            location.reload();
        } catch {
            // TODO: add error hand
        }
    }
}
