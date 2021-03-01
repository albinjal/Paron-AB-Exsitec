import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDeliveryComponent } from './register-delivery/register-delivery.component';

@Component({
    selector: 'app-deliveries',
    templateUrl: './deliveries.component.html',
    styleUrls: ['./deliveries.component.scss'],
})
export class DeliveriesComponent implements OnInit {
    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {}

    openDeliveryDialog() {
        const dialogRef = this.dialog.open(RegisterDeliveryComponent);
    }
}
