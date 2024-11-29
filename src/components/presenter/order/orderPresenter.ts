import { Presenter } from '../base/presenter';
import { OrderView } from '../../view/order/orderView';
import { OrderModel } from '../../model/orderModel';
import { IOrder } from '../../../types/models';

export class OrderPresenter extends Presenter<IOrder> {
	constructor(
		 orderView: OrderView,
		 private orderModel: OrderModel
	) {
		 super(orderView, orderModel);
	}

	protected initEvents(): void {
		 this.orderModel.on('order:changed', () => {
			  this.view.render(this.orderModel.getData());
		 });

		 this.view.on('form:submit', async (data: Record<string, string>) => {
			  Object.entries(data).forEach(([key, value]) => {
					(this.orderModel as OrderModel).setField(key as keyof IOrder, value);
			  });
			  
			  if ((this.orderModel as OrderModel).validate()) {
					await (this.orderModel as OrderModel).submit();
					this.emit('order:success');
			  }
		 });
	}

	async init(): Promise<void> {
		 await this.orderModel.load();
	}
}
