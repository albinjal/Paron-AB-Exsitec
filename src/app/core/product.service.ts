import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private static readonly colPath = 'products';
    constructor(private afs: AngularFirestore) {}

    getProducts() {
        return this.afs
            .collection<Product>(ProductService.colPath)
            .valueChanges({ idField: 'id' });
    }
}
