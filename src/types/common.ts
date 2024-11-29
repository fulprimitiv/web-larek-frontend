export interface IFormState {
	valid: boolean;
	errors: string[];
	values: Record<string, string>;
}

export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';
export type ApiMethods = ApiPostMethods | 'GET';
