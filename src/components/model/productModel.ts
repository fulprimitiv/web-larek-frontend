import { Model } from './base/model';
import { IProduct } from '../../types/models';
import { Api } from '../base/api';

export class ProductModel extends Model<IProduct[]> {
	constructor(api: Api) {
		 super(api);
		 this.data = [];
	}

	async load(): Promise<void> {
		 const data = await this.api.get('/products');
		 this.data = data as IProduct[];
		 this.emit('products:loaded', this.data);
	}

	getProduct(id: string): IProduct | undefined {
		 return this.data.find(product => product.id === id);
	}
}

