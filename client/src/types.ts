export type OrderType = {
    id: string;
    event_name: OrderEvent;
    price: number;
    item: string;
    customer: string;
    destination: string;
}

export enum OrderEvent {
    CREATED = 'CREATED',
    COOKED = 'COOKED',
    DRIVER_RECEIVED = 'DRIVER_RECEIVED',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'CANCELLED',
}