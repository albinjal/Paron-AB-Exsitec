import { Pipe, PipeTransform } from '@angular/core';
import { Warehouse } from '../core/warehouse.model';

@Pipe({
    name: 'chartData',
})
export class ChartDataPipe implements PipeTransform {
    transform(value: Warehouse[]) {
        if (!value) {
            return [];
        }
        const res = value.map((warehouse) => ({
            name: warehouse.id,
            series: Object.entries(warehouse.amounts).map(([name, value]) => ({
                name,
                value,
            })),
        }));
        return res;
    }
}
