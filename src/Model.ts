function camelToSnake(match, offset, string) {
	return `_${match.toLowerCase()}`;
}

const transformField = fieldName => {
	return fieldName.replace(/[A-Z]/, camelToSnake);
};

interface IModel {
	entity: string;
	fields: object;
}

export default abstract class Model implements IModel {
	entity: string;
	fields: object;
	constructor(params: IModel) {
		this.entity = params.entity;
		this.fields = params.fields;
		this.getColumns = this.getColumns.bind(this);
	}

	getColumns() {
		let columns = Object.keys(this.fields);
		let relationship = "FOREIGN KEY(column_id) REFERENCES artist(artist_id)";
		return columns.map(
			column =>
				`${transformField(column)} ${
					this.fields[column].autoIncrement ? "AUTO_INCREMENT" : ""
				} ${this.fields[column].null ? "" : "NOT NULL"} ${
					this.fields[column].primary_key ? "PRIMARY KEY" : ""
				} `
		);
	}

	createTable() {
		return `CREATE TABLE ${this.entity} (${this.getColumns()})`;
	}
}
