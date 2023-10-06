import dotenv from "dotenv";

import path from "node:path";

const configPathEnv = path.join(__dirname, "..", "config", ".env");
const configPathLocal = path.join(__dirname, "..", "config", ".env.local");

dotenv.config({ path: configPathEnv });
dotenv.config({ path: configPathLocal });

const config = {
	SERVER: {
		PORT: parseInt(process.env.PORT || "7000", 10) || 7000,
		HOST: process.env.HOST || "localhost",
	},

	MAIL: {
		MAIL_ADDRESS: process.env.MAIL_ADDRESS || "",
		MAIL_PASSWORD: process.env.MAIL_PASSWORD || "",
		MAIL_SERVICE: process.env.MAIL_SERVICE || "",
	},

	JWT: {
		JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "",
		JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "",
		JWT_ACCESS_LIFETIME: process.env.JWT_ACCESS_LIFETIME || "1h",
		JWT_REFRESH_LIFETIME: process.env.JWT_REFRESH_LIFETIME || "15d",
	},

	COOKIE: {
		COOKIE_SECRET: process.env.COOKIE_SECRET || "",
		COOKIE_LIFETIME:
			parseInt(process.env.COOKIE_LIFETIME || "10000", 10) || 10000,
	},

	SESSION: {
		SESSION_SECRET: process.env.SESSION_SECRET || "",
		SESSION_LIFETIME:
			parseInt(process.env.SESSION_LIFETIME || "10000") || 10000,
		SESSION_RESAVE:
			Boolean(parseInt(process.env.SESSION_RESAVE || "0", 10)) || false,
		SESSION_NAME: process.env.SESSION_NAME || "sessionid",
	},

	LOGGER: {
		LOGGER_PATH: process.env.LOGGER_PATH || "logs",
		LOG_ERROR_FILE: process.env.LOG_ERROR_FILE || "error.log",
		LOG_COMBINED_FILE: process.env.LOG_COMBINED_FILE || "combined.log",
	},

	REDIS: {
		REDIS_HOST: process.env.REDIS_HOST || "localhost",
		REDIS_PORT: parseInt(process.env.REDIS_PORT || "6379") || 6379,
		REDIS_PASS: process.env.REDIS_PASS || "",
	},

	CORS: {
		CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
		CORS_CREDENTIALS:
			Boolean(parseInt(process.env.CORS_CREDENTIALS || "1", 10)) || true,
	},
};

export default config;
