import { Presenter } from '../base/presenter';
import { CatalogView } from '../../view/products/catalogView';
import { ProductModel } from '../../model/productModel';
import { IProduct } from '../../../types/models';

export class CatalogPresenter extends Presenter<IProduct[]> {
	constructor(
		 catalogView: CatalogView,
		 private productModel: ProductModel
	) {
		 super(catalogView, productModel);
	}

	protected initEvents(): void {
		 this.productModel.on('products:loaded', () => {
			  this.view.render(this.productModel.getData());
		 });

		 this.view.on('product:select', (product: IProduct) => {
			  this.emit('modal:open', product);
		 });

		 this.view.on('product:add', (product: IProduct) => {
			  this.emit('basket:add', product);
		 });
	}

	async init(): Promise<void> {
		 await this.productModel.load();
	}
}
