export interface UserDto {
	id: string;
	firstName: string;
	email: string;
	isActivated: boolean;
}

export class UserDto {
	email: string;
	firstName: string;
	id: string;
	isActivated: boolean;

	constructor(model: UserDto) {
		this.id = model.id;
		this.firstName = model.firstName;
		this.email = model.email;
		this.isActivated = model.isActivated;
	}
}

module.exports = { UserDto };
