import { inject, injectable } from "inversify";
import { TYPES as UsersTypes } from "../module/UsersModuleTypes";
import { UsersRepository } from "../repositories/UsersRepository";

import { v4 } from "uuid";

import "reflect-metadata";

@injectable()
export class UsersService {
	constructor(
		@inject(UsersTypes.UsersRepository)
		private readonly usersRepository: UsersRepository,
	) {
		
	}

	/*
	public changePhoto(userId: number, url: string) {
		//const user = this.usersRepository.findById(userId);
	}
    */

	public register(
		email: string,
		firstName: string,
		lastName: string,
		password: string,
		username?: string,
	) {
		const _username = username || v4();
		const salt = v4();

		this.usersRepository.create(
			email,
			firstName,
			lastName,
			password,
			salt,
			_username,
		);
	}

	public changeBio() {}

	public changeFirstname() {}

	public changeLastname() {}

	public changeUsername() {}

	public deleteAccount() {
		//отсосите
	}
}
