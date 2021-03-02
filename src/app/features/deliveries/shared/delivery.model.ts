export interface SendDelivery {
    date: Date;
    product: string;
    warehouse: string;
    amount: number;
    updatedBy: string;
}
export interface Delivery extends SendDelivery {
    created: Date;
    lastUpdate: Date;
    id: string;
}