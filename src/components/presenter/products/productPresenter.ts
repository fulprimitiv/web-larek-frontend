import { Presenter } from '../base/presenter';
import { ProductView } from '../../view/products/productView';
import { Model } from '../../model/base/model';
import { IProduct } from '../../../types/models';

export class ProductPresenter extends Presenter<IProduct> {
    constructor(
        productView: ProductView,
        private productModel: Model<IProduct>
    ) {
        super(productView, productModel);
    }

    protected initEvents(): void {
        this.view.on('product:buy', (product: IProduct) => {
            this.emit('basket:add', product);
        });
    }

    async init(): Promise<void> {
        await this.productModel.load();
    }
}
