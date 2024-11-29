import { EventEmitter } from '../../base/events';

export abstract class View<T> extends EventEmitter {
    constructor(protected readonly container: HTMLElement) {
        super();
    }

    abstract render(data: T): void;

    protected setText(element: HTMLElement, value: unknown) {
        if (element) {
            element.textContent = String(value);
        }
    }
}