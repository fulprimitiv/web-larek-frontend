import './scss/styles.scss';
// Модели
interface IProduct {
	id: string;
	title: string;
	description: string;
	price: number;
	category: string;
	image: string;
}

interface IOrder {
	products: IProduct[];
	total: number;
	address: string;
	payment: string;
}

// Представления
interface IView {
	render(data: unknown): void;
	toggleClass(className: string, force?: boolean): void;
	clear(): void;
}

interface IProductView extends IView {
	product: IProduct;
}

interface IBasketView extends IView {
	order: IOrder;
}

// Презентеры
interface IPresenter {
	init(): void;
	destroy(): void;
}

interface IProductPresenter extends IPresenter {
	loadProducts(): Promise<void>;
	addToBasket(product: IProduct): void;
}

interface IBasketPresenter extends IPresenter {
	checkout(): Promise<void>;
	removeProduct(id: string): void;
}