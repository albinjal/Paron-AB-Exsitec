import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { Warehouse } from 'src/app/shared/warehouse.model';
import { WarehouseService } from 'src/app/shared/warehouse.service';

@Component({
    selector: 'app-register-delivery',
    templateUrl: './register-delivery.component.html',
    styleUrls: ['./register-delivery.component.scss'],
})
export class RegisterDeliveryComponent implements OnInit {
    deliveryForm: FormGroup;
    products$: Observable<Product[]>;
    warehouses$: Observable<Warehouse[]>;
    constructor(
        private prodService: ProductService,
        private warehouseService: WarehouseService,
        formBuiler: FormBuilder
    ) {
        this.deliveryForm = formBuiler.group({
            warehouse: [],
            product: [],
            amount: []
        })
    }

    ngOnInit(): void {
        this.products$ = this.prodService.getProducts();
        this.warehouses$ = this.warehouseService.getWarehouses();
    }
}
