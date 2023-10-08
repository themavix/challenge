import { OrderEvent } from '../types';

export function getEventColumnColor(value: OrderEvent) {
    switch (value) {
        case OrderEvent.CREATED:
            return '#00000';

        case OrderEvent.COOKED:
            return '#b5c107';

        case OrderEvent.DRIVER_RECEIVED:
            return '#079ec1';
                
        case OrderEvent.DELIVERED:
            return '#00a200';
        
        case OrderEvent.CANCELLED:
            return '#f62929';     
            
        default: return '#00000'; 
    }
}