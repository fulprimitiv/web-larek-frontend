import { View } from '../base/view';
import { IOrder } from '../../../types/models';

export class OrderView extends View<IOrder> {
    render(order: IOrder): void {
        this.container.innerHTML = `
            <form class="order-form">
                <input type="text" name="email" value="${order.email}" placeholder="Email">
                <input type="text" name="phone" value="${order.phone}" placeholder="Телефон">
                <input type="text" name="address" value="${order.address}" placeholder="Адрес">
                <select name="payment">
                    <option value="card" ${order.payment === 'card' ? 'selected' : ''}>Картой</option>
                    <option value="cash" ${order.payment === 'cash' ? 'selected' : ''}>Наличными</option>
                </select>
                <div class="order-total">Итого: ${order.total}</div>
                <button type="submit">Оформить заказ</button>
            </form>
        `;
    }
}
