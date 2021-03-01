import { Component, Input, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/core/warehouse.model';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
    @Input() warehouses: Warehouse[] = [];
    view = [600, 400];
    chartData: any[];
    showXAxis = true;
    showYAxis = true;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Warehouse';
    showYAxisLabel = true;
    yAxisLabel = 'Supply';
    timeline = true;

    constructor() {}

    ngOnInit(): void {
        console.log(this.chartData);
    }
}
