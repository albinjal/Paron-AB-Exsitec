import { Component, OnInit } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    items: Observable<unknown[]>;
    constructor(private afs: AngularFirestore) {
        afs.collection('deliveries').snapshotChanges().subscribe(console.log);
    }

    ngOnInit(): void {}
}
