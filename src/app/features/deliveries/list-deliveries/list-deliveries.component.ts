import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';

@Component({
    selector: 'app-list-deliveries',
    templateUrl: './list-deliveries.component.html',
    styleUrls: ['./list-deliveries.component.scss'],
})
export class ListDeliveriesComponent implements OnInit {
    deliveries$: Observable<Delivery[]>;
    displayedColumns = ['date', 'warehouse', 'product', 'amount', 'updatedBy'];

    constructor(private deliveryService: DeliveryService) {}

    ngOnInit(): void {
        this.deliveries$ = this.deliveryService.listDeliveries();
    }
}
