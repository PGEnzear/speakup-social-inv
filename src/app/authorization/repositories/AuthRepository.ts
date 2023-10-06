import { inject, injectable } from "inversify";
import { TYPES as PrismaTypes } from "../../../prisma/module/PrismaModuleTypes";
import { PrismaService } from "../../../prisma/services/PrismaService";

import "reflect-metadata";

@injectable()
export class AuthRepository {
	constructor(
		@inject(PrismaTypes.PrismaService)
		private readonly prismaService: PrismaService,
	) {}
}
