import { Model } from './base/model';
import { IBasket, IProduct } from '../../types/models';
import { Api } from '../base/api';

export class BasketModel extends Model<IBasket> {
    constructor(api: Api) {
        super(api);
        this.data = {
            items: [],
            total: 0
        };
    }

    async load(): Promise<void> {
        this.emit('basket:loaded', this.data);
    }

    addItem(item: IProduct): void {
        this.data.items.push(item);
        this.data.total += item.price;
        this.emit('basket:changed', this.data);
    }

    removeItem(id: string): void {
        const index = this.data.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.data.total -= this.data.items[index].price;
            this.data.items.splice(index, 1);
            this.emit('basket:changed', this.data);
        }
    }

    clear(): void {
        this.data = {
            items: [],
            total: 0
        };
        this.emit('basket:changed', this.data);
    }

    getItems(): IProduct[] {
        return this.data.items;
    }
}
