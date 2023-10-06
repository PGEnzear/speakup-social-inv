import { inject, injectable } from "inversify";
import { LoggerService } from "../../logger/services/LoggerService";
import { PrismaClient } from "@prisma/client";

import { TYPES as LoggerTypes } from "../../logger/module/LoggerModuleTypes";

import "reflect-metadata";

@injectable()
export class PrismaService {
	private client: PrismaClient;

	constructor(
		@inject(LoggerTypes.LoggerService)
		private readonly loggerService: LoggerService,
	) {
		this.client = new PrismaClient();
	}

	public getClient() {
		return this.client;
	}

	async connect(): Promise<void> {
		try {
			await this.client.$connect();
			this.loggerService.log("[PrismaService] Connected to database");
		} catch (e) {
			if (e instanceof Error) {
				this.loggerService.error(
					"[PrismaService] Connection failed, message: " + e.message,
				);
			}
		}
	}

	async disconnect(): Promise<void> {
		await this.client.$disconnect();
	}
}
