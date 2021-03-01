import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/product.model';
import { ProductService } from 'src/app/core/product.service';
import { Warehouse } from 'src/app/core/warehouse.model';
import { WarehouseService } from 'src/app/core/warehouse.service';
import { DeliveryService } from '../shared/delivery.service';

@Component({
    selector: 'app-register-delivery',
    templateUrl: './register-delivery.component.html',
    styleUrls: ['./register-delivery.component.scss'],
})
export class RegisterDeliveryComponent implements OnInit {
    deliveryForm: FormGroup;
    products$: Observable<Product[]>;
    warehouses$: Observable<Warehouse[]>;
    loading = false;

    constructor(
        private prodService: ProductService,
        private warehouseService: WarehouseService,
        private deliveryService: DeliveryService,
        formBuiler: FormBuilder,
        public dialogRef: MatDialogRef<RegisterDeliveryComponent>
    ) {
        this.deliveryForm = formBuiler.group({
            warehouse: [],
            product: [],
            amount: [0],
            outgoing: ['false'],
            date: [new Date()],
        });
    }

    ngOnInit(): void {
        this.products$ = this.prodService.getProducts();
        this.warehouses$ = this.warehouseService.getWarehouses();
    }

    async submitDeliveryForm() {
        this.loading = true;
        const formValues = this.deliveryForm.value;
        formValues.amount = parseInt(formValues.amount);

        // Convert 'true' to true, looks kinda ugly :/
        if (formValues.outgoing === 'true') {
            formValues.amount *= -1;
        }
        // Not nessecary to store anymore
        delete formValues.outgoing;

        try {
            const res = await this.deliveryService.registerDelivery(formValues);
            this.dialogRef.close();
        } catch {
            // TODO: add error handling
        }
        this.loading = false;
    }
}
