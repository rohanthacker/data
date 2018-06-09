import Model from "./Model";
import { AutoField, VarcharField } from "./fields";

interface IUser {
	firstName: string;
	lastName?: string;
}

class Task extends Model {
	userId: number;
	taskName: string;
	constructor(params = {}) {
		super({
			entity: "Tasks",
			fields: {
				taskName: new VarcharField()
			}
		});
	}
}

class User extends Model {
	firstName: string;
	lastName: string;
	constructor(params: IUser) {
		super({
			entity: "Users",
			fields: {
				id: new AutoField(),
				firstName: new VarcharField(),
				lastName: new VarcharField()
			}
		});
	}
}

let newUser = new User({ firstName: "Rohan", lastName: "Thacker" });
console.log(newUser.createTable());
