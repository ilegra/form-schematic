export interface SelectOption {
    key: string;
    value: string;
}

export class SelectOption {
	public key: string;
	public value: string;

	constructor(data: SelectOption) {
		this.key = data.key;
		this.value = data.value;
	}
}
