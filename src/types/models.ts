export interface IProduct {
	id: string;
	title: string;
	description: string;
	category: string;
	price: number;
	image: string;
}

export interface IBasket {
	items: IProduct[];
	total: number;
}

export interface IOrder {
	payment: string;
	address: string;
	email: string;
	phone: string;
	items: IProduct[];
	total: number;
}
