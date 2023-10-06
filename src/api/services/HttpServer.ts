import { inject, injectable } from "inversify";

import express, { Express } from "express";

import { TYPES as LoggerTypes } from "../../logger/module/LoggerModuleTypes";
import { LoggerService } from "../../logger/services/LoggerService";

import config from "../../config";

import { TYPES as RedisTypes } from "../../redis/module/RedisModuleTypes";
import { RedisService } from "../../redis/services/RedisService";

import session from "express-session";

//import configure from "../utils/configure";

import "../controllers/index";

import "../controllers/users/UsersController";

import "reflect-metadata";
import RedisStore from "connect-redis";
import { InversifyExpressServer } from "inversify-express-utils";
import { apiContainer } from "../module/ApiModule";

@injectable()
export class HttpServer {
	public app: Express;

	public port: number;
	public host: string;

	public server: InversifyExpressServer;

	public cacheStore: RedisStore;

	constructor(
		@inject(RedisTypes.RedisService)
		private readonly redisService: RedisService,
		@inject(LoggerTypes.LoggerService)
		private readonly loggerService: LoggerService,

	) {
		this.app = express();

		this.port = config.SERVER.PORT;
		this.host = config.SERVER.HOST;

		this.cacheStore = new RedisStore({
			client: this.redisService.redisClient,
		});

		this.server = new InversifyExpressServer(apiContainer);

		this.server.setConfig((app) => {

			app.use(
				session({
					saveUninitialized: false,
					store: this.cacheStore,
					name: config.SESSION.SESSION_NAME,
					secret: config.SESSION.SESSION_SECRET,
					resave: config.SESSION.SESSION_RESAVE,
					cookie: {
						maxAge: config.SESSION.SESSION_LIFETIME,
					},
				})
			);

		});


	}

	public async start() {

		return new Promise((resolve, reject) => {

			try {

				this.server.build().listen(this.port, this.host, () => {
					this.loggerService.log(`[HTTP] Server started on port: ${this.port}, host: ${this.host}, time: ${Date.now()}`);
					resolve(true);
				});
				
			} catch(e) {
				if(e instanceof Error) {
					reject(e);
					this.loggerService.log(`[HTTP] Error ${e.message}`);
				}
			}
		
		});

	}
}
