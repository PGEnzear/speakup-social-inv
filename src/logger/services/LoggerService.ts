import { injectable } from "inversify";
import winston from "winston";

import path from "node:path";

const errorLogFile = path.join(__dirname, "..", "..", "..", "logs", "error.log");
const combinedLogFile = path.join(
	__dirname,
	"..",
	"..",
	"..",
	"logs",
	"combined.log",
);

import "reflect-metadata";

@injectable()
export class LoggerService {
	private logger: winston.Logger;

	constructor() {
		
		this.logger = winston.createLogger({
			level: "info",
			format: winston.format.json(),
			defaultMeta: { service: "discord-app-service-rest" },
			transports: [
				new winston.transports.File({
					filename: errorLogFile,
					level: "error",
				}),
				new winston.transports.File({ filename: combinedLogFile }),
			],
		});

		if (process.env.NODE_ENV !== "production") {
			this.logger.add(
				new winston.transports.Console({
					format: winston.format.simple(),
				}),
			);
		}
	}

	public error(message: string) {
		this.logger.log({
			level: "error",
			message,
		});
	}

	public log(message: string) {
		this.logger.log({
			level: "info",
			message,
		});
	}

	public getLogger(): winston.Logger {
		return this.logger;
	}
}
