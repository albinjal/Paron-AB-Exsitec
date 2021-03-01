export interface SendDelivery {
    date: Date;
    product: string;
    warehouse: string;
    amount: number;
}
export interface Delivery extends SendDelivery {
    created: Date;
    lastUpdate: Date;
    id: string;
}