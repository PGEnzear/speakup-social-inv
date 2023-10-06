import { inject, injectable } from "inversify";
import { TYPES as PrismaTypes } from "../../../prisma/module/PrismaModuleTypes";
import { PrismaService } from "../../../prisma/services/PrismaService";

import "reflect-metadata";

@injectable()
export class UsersRepository {
	constructor(
		@inject(PrismaTypes.PrismaService)
		private readonly prismaService: PrismaService,
	) {}

	public getClient() {
		return this.prismaService.getClient().user;
	}

	public create(
		email: string,
		firstName: string,
		lastName: string,
		password: string,
		salt: string,
		username: string,
	) {
		return this.getClient().create({
			data: {
				email,
				firstName,
				lastName,
				password,
				salt,
				username,
			},
		});
	}

	public delete(id: number) {
		return this.getClient().update({
			where: { id },
			data: { deleted: true },
		});
	}

	public findByEmail(email: string) {
		return this.getClient().findFirst({ where: { email } });
	}

	public findById(id: number) {
		return this.getClient().findFirst({ where: { id } });
	}

	public findByUsername(username: string) {
		return this.getClient().findFirst({ where: { username } });
	}
}
