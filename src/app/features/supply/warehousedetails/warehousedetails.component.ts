import { Component, Input, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/core/warehouse.model';

@Component({
  selector: 'app-warehousedetails',
  templateUrl: './warehousedetails.component.html',
  styleUrls: ['./warehousedetails.component.scss']
})
export class WarehousedetailsComponent implements OnInit {
  @Input() warehouse: Warehouse;
  
  constructor() { }

  ngOnInit(): void {
  }

}
