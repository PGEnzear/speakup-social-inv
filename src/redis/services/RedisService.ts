import { inject, injectable } from "inversify";

import * as redis from "redis";

import { RedisClientType } from "redis";

import config from "../../config";

import { TYPES as LoggerTypes } from "../../logger/module/LoggerModuleTypes";
import { LoggerService } from "../../logger/services/LoggerService";

import "reflect-metadata";

@injectable()
export class RedisService {

	public redisClient: RedisClientType;

	public readonly host: string;
	public readonly port: number;

	private readonly password: string;

	constructor(
		@inject(LoggerTypes.LoggerService)
		private readonly loggerService: LoggerService,
	) {
		this.host = config.REDIS.REDIS_HOST;
		this.port = config.REDIS.REDIS_PORT;
		this.password = config.REDIS.REDIS_PASS;

		this.redisClient = redis.createClient({
			password: this.password,
			socket: {
				host: this.host,
				port: this.port,
			},
		});

	}

	public async disconnect(): Promise<void> {

		try {
			await this.redisClient.disconnect();
			this.loggerService.log("[RedisService] Connected");
		} catch (e) {
			if (e instanceof Error) {
				this.loggerService.error(
					"[RedisService] Disconnecting failed, message: " + e.message,
				);
			}
		}
	}


	public async connect(): Promise<void> {

		try {
			await this.redisClient.connect();
			this.loggerService.log("[RedisService] Connected");
		} catch (e) {
			if (e instanceof Error) {
				this.loggerService.error(
					"[RedisService] Connection failed, message: " + e.message,
				);
			}
		}
	}
}
