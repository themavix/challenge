import { ObservableMap, makeAutoObservable, observable, values } from 'mobx';
import { OrderType } from '../types';
import { Socket, io } from 'socket.io-client';

class AppStore {
    private items: ObservableMap<string, OrderType> = observable.map();
    private searchTerm?: number;
    private socket: Socket;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });

        this.socket = io("http://localhost:4000/", {
            withCredentials: false,
        })

        this.socket.on('order_event', this.onEvent);
    }

    private onEvent(events: OrderType[]) {
        events.forEach(event => {
            this.items.set(event.id, event);
        });
    }

    public onSearch(term: string) {
        this.searchTerm = term ? +term : undefined;
    }

    private get itemsArray() {
        return values(this.items);
    }

    public get filteredItems() {
        return this.itemsArray.filter(({ price }) => price === this.searchTerm);
    }

    public get orders() {
        if (this.searchTerm) {
            return this.filteredItems;
        }

        return this.itemsArray;
    }

    public get ordersCount() {
        if (this.searchTerm) {
            return this.filteredItems.length;
        }
    }
}

export const appStore = new AppStore();