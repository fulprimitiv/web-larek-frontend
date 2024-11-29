import { EventEmitter } from '../../base/events';
import { View } from '../../view/base/view';
import { Model } from '../../model/base/model';

export abstract class Presenter<T> extends EventEmitter {
    constructor(
        protected view: View<T>,
        protected model: Model<T>
    ) {
        super();
        this.initEvents();
    }

    protected abstract initEvents(): void;
    abstract init(): Promise<void>;
}
