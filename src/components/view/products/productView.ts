import { View } from '../base/view';
import { IProduct } from '../../../types/models';

export class ProductView extends View<IProduct> {
    render(product: IProduct): void {
        this.container.innerHTML = `
            <div class="product-details">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-info">
                    <h2>${product.title}</h2>
                    <p class="description">${product.description}</p>
                    <p class="category">${product.category}</p>
                    <p class="price">${product.price}</p>
                    <button class="buy-button" data-id="${product.id}">
                        Добавить в корзину
                    </button>
                </div>
            </div>
        `;

        this.container.querySelector('.buy-button')?.addEventListener('click', () => {
            this.emit('product:buy', product);
        });
    }
}
