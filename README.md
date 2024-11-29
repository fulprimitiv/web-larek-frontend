# 3 курс
# Еремеев Дмитрий Андреевич
# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

						Архитектура Web-Larek Frontend

Приложение основано на паттерне MVP (Model-View-Presenter), который разделяет приложение на три основных компонента: Model (Модель), View (Представление) и Presenter (Презентер).

1) Компоненты архитектуры

Model:
	Отвечает за данные и бизнес-логику. Реализует взаимодействие с API и управляет состоянием данных.

View:
	Отвечает за отображение данных пользователю. Не содержит бизнес-логики, только логику отрисовки.

Presenter:
	Связывает Model и View, обрабатывает пользовательский ввод и события, обновляет Model и View.

Взаимодействие компонентов:
	Presenter подписывается на события View и Model
	View генерирует события пользовательского интерфейса
	Presenter обрабатывает события и обновляет Model
	Model генерирует события изменения данных
	Presenter получает события Model и обновляет View

2) Базовые классы и компоненты

Model - Базовый класс для всех моделей
	getData(): T - получение данных
	load(): Promise<void> - загрузка данных
	setField(field: K, value: T[K]): void - установка значения поля

BasketModel - Управление корзиной покупок
	addItem(item: IProduct): void - добавление товара
	removeItem(id: string): void - удаление товара
	getItems(): IProduct[] - получение списка товаров

ProductModel - Управление каталогом товаров
	load(): Promise<void> - загрузка товаров
	getProduct(id: string): IProduct - получение товара по id

OrderModel - Управление заказом
	submit(): Promise<void> - отправка заказа
	validate(): boolean - валидация данных
	setField(): void - установка поля заказа

View - Базовый класс представлений
	render(data: T): void - отрисовка данных
	setText(element: HTMLElement, value: unknown) - установка текста

CatalogView - Отображение каталога товаров
	render(products: IProduct[]): void - отрисовка списка товаров

BasketView - Отображение корзины
	render(basket: IBasket): void - отрисовка корзины

OrderView - Отображение формы заказа
	render(order: IOrder): void - отрисовка форм

CatalogPresenter - Управляет взаимодействием каталога товаров
	Обрабатывает загрузку товаров
	Отвечает за отображение списка товаров
	Обрабатывает выбор товара и открытие модального окна

BasketPresenter - Управляет корзиной покупок
	Обрабатывает добавление/удаление товаров
	Обновляет отображение корзины
	Считает общую сумму

OrderPresenter - Управляет оформлением заказа
	Валидирует данные форм
	Отправляет заказ на сервер
	Показывает результат оформления

ProductPresenter
	Управляет детальным просмотром товара
	Показывает подробную информацию о товаре
	Обрабатывает добавление в корзину


3) Типы данных

interface IProduct {
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    image: string;
}

interface IBasket {
    items: IProduct[];
    total: number;
}

interface IOrder {
    payment: string;
    address: string;
    email: string;
    phone: string;
    items: IProduct[];
    total: number;
}
