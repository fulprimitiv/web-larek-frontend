import { View } from '../base/view';
import { IBasket } from '../../../types/models';

export class BasketView extends View<IBasket> {
    render(basket: IBasket): void {
        this.container.innerHTML = `
            <div class="basket">
                ${basket.items.map(item => `
                    <div class="basket-item" data-id="${item.id}">
                        <h4>${item.title}</h4>
                        <p>${item.price}</p>
                        <button data-id="${item.id}">Удалить</button>
                    </div>
                `).join('')}
                <div class="basket-total">
                    Итого: ${basket.total}
                </div>
            </div>
        `;
    }
}
