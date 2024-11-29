import { View } from '../base/view';
import { IProduct } from '../../../types/models';

export class CatalogView extends View<IProduct[]> {
    render(products: IProduct[]): void {
        this.container.innerHTML = products.map(product => `
            <div class="card" data-id="${product.id}">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button data-id="${product.id}">Купить</button>
            </div>
        `).join('');
    }
}
