import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from 'src/app/core/warehouse.model';
import { WarehouseService } from 'src/app/core/warehouse.service';

@Component({
    selector: 'app-supply',
    templateUrl: './supply.component.html',
    styleUrls: ['./supply.component.scss'],
})
export class SupplyComponent implements OnInit {
    warehouses$: Observable<Warehouse[]>;
    selectedWarehouse: Warehouse;
    constructor(private warehouseService: WarehouseService) {}

    ngOnInit(): void {
        this.warehouses$ = this.warehouseService.getWarehouses();
    }

    changeWarehouse(selected: Warehouse) {
        this.selectedWarehouse = selected;
    }
}
