import { EventEmitter } from '../../base/events';
import { Api } from '../../base/api';

export abstract class Model<T> extends EventEmitter {
	protected data: T;

	constructor(protected api: Api) {
		 super();
	}

	abstract load(): Promise<void>;
	
	getData(): T {
		 return this.data;
	}

	setField<K extends keyof T>(field: K, value: T[K]): void {
		 this.data[field] = value;
		 this.emit('changed', this);
	}

	validate?(): boolean;
	submit?(): Promise<void>;
}
