import cors from "cors";
import express, { Express } from "express";
import session from "express-session";
import helmet from "helmet";

import config from "../../config";
import cookieParser from "cookie-parser";

const configure = (app: Express) => {
	app.use(
		express.json({
			limit: "1kb",
		}),
	);

	app.use(cookieParser(config.COOKIE.COOKIE_SECRET));

	app.use(
		cors({
			methods: ["GET", "POST", " UPDATE", "DELETE"],
			credentials: true,
			origin: "*", //temp
		}),
	);

	app.use(
		helmet.frameguard({
			action: "deny",
		}),
		helmet.xssFilter(),
		helmet.hsts({
			maxAge: 10886400000,
			preload: true,
		}),
		helmet.hidePoweredBy(),
	);

	return app;
};

export default configure;
