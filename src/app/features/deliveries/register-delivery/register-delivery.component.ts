import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
        private snackBar: MatSnackBar,
        formBuiler: FormBuilder,
        public dialogRef: MatDialogRef<RegisterDeliveryComponent>
    ) {
        this.deliveryForm = formBuiler.group({
            warehouse: ['', Validators.required],
            product: ['', Validators.required],
            amount: [
                '',
                Validators.compose([Validators.required, Validators.min(1)]),
            ],
            outgoing: ['false'],
            date: [new Date(), Validators.required],
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
            this.snackBar.open('Delivery successfully added.')
        } catch {
            // TODO: add error handling
        }
        this.loading = false;
    }
}
