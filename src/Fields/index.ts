interface IField {
	name?: string:
	type?: string;
	constaints?: {
		null?: boolean;
		unique?: boolean;
		primary_key?: boolean;
		autoIncrement?: boolean;
		default?: any;
	}
}

class Field {
	type: string;
	constaints: {
		null: boolean;
		unique: boolean;
		primary_key: boolean;
		autoIncrement: boolean;
	}
	constructor(params: IField = {}) {
		this.type = params.type;
		this.constaints = params.constaints;
	}
}

export class AutoField extends Field {
	constructor() {
		super();
		this.primary_key = true;
		this.autoIncrement = true;
	}
}

export class VarcharField extends Field {
	constructor() {
		super();
	}
}
