export interface UserDto {
	id: string;
	email: string;
	isActivated: boolean;
}

export class UserDto {
	email: string;
	id: string;
	isActivated: boolean;

	constructor(model: UserDto) {
		this.id = model.id;
		this.email = model.email;
		this.isActivated = model.isActivated;
	}
}

module.exports = { UserDto };
