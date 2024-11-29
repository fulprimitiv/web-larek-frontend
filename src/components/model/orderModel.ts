import { Model } from './base/model';
import { IOrder } from '../../types/models';
import { Api } from '../base/api';

export class OrderModel extends Model<IOrder> {
    constructor(api: Api) {
        super(api);
        this.data = {
            payment: '',
            address: '',
            email: '',
            phone: '',
            items: [],
            total: 0
        };
    }

    async load(): Promise<void> {
        this.emit('order:loaded', this.data);
    }

    async submit(): Promise<void> {
        await this.api.post('/order', this.data);
        this.emit('order:submitted', this.data);
    }

    setField<K extends keyof IOrder>(field: K, value: IOrder[K]): void {
        this.data[field] = value;
        this.emit('order:changed', this.data);
    }
}
