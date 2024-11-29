import { IProduct, IBasket, IOrder } from './models';

export interface IEvents {
    'product:select': IProduct;
    'product:add': IProduct;
    'basket:change': IBasket;
    'order:submit': IOrder;
    'modal:open': unknown;
    'modal:close': void;
}
