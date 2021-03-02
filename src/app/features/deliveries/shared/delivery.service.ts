import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Delivery, SendDelivery } from './delivery.model';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from 'src/app/core/auth.service';

@Injectable({
    providedIn: 'root',
})
export class DeliveryService {
    private static readonly colPath = 'deliveries';

    constructor(private afs: AngularFirestore, private auth: AuthService) {}

    async registerDelivery(delivery: SendDelivery) {
        const timeStamp = firebase.default.firestore.FieldValue.serverTimestamp();
        return this.afs
            .collection(DeliveryService.colPath)
            .add({ ...delivery, created: timeStamp, lastUpdate: timeStamp, updatedBy: this.auth.lastUser.email});
    }

    listDeliveries() {
        return this.afs
            .collection<Delivery>(DeliveryService.colPath, (ref) =>
                ref.orderBy('date', 'desc')
            )
            .valueChanges({ idField: 'id' });
    }
}
