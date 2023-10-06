import { inject, injectable } from "inversify";
import { TYPES as PrismaTypes } from "../../../prisma/module/PrismaModuleTypes";
import { PrismaService } from "../../../prisma/services/PrismaService";

import "reflect-metadata";

@injectable()
export class SessionRepository {
	constructor(
		@inject(PrismaTypes.PrismaService)
		private readonly prismaService: PrismaService,
	) {}

	public getClient() {
		return this.prismaService.getClient().authorizationInfo;
	}

	public findById(id: number) {
		return this.getClient().findFirst({ where: { id } });
	}

	public findByRefreshToken(refreshToken: string) {
		//return this.getClient().findFirst({ where: { refreshToken }})
	}

	public delete(id: number) {
		//return this.getClient().update({ where: { id }, data: { refreshTokenDeleted: true } })
	}

	public findByUserId(userId: number) {
		return this.getClient().findFirst({ where: { userId } });
	}
}
