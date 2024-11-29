import { Presenter } from '../base/presenter';
import { BasketView } from '../../view/basket/basketView';
import { BasketModel } from '../../model/basketModel';
import { IBasket } from '../../../types/models';

export class BasketPresenter extends Presenter<IBasket> {
	constructor(
		 basketView: BasketView,
		 private basketModel: BasketModel
	) {
		 super(basketView, basketModel);
	}

	protected initEvents(): void {
		 this.basketModel.on('basket:changed', () => {
			  this.view.render(this.basketModel.getData());
		 });

		 this.view.on('item:remove', (payload: { id: string }) => {
			  this.basketModel.removeItem(payload.id);
		 });
	}

	async init(): Promise<void> {
		 await this.basketModel.load();
	}
}
