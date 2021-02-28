import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Warehouse } from './warehouse.model';

@Injectable({
    providedIn: 'root',
})
export class WarehouseService {
    private static readonly colPath = 'warehouses';
    constructor(private afs: AngularFirestore) {}

    getWarehouses() {
        return this.afs
            .collection<Warehouse>(WarehouseService.colPath)
            .valueChanges({ idField: 'id' });
    }
}
