import { controller, httpGet } from "inversify-express-utils";

import { Request, Response } from "express";

@controller("/users")
export class UsersController {
	constructor() {}

	@httpGet("register")
	public async register(req: Request, res: Response) {

		console.log("1");

		const result = {
			"error": false,
			"transport": true,
			"server": "cloudflare",
			"connection": "tcp",
			"version": "1.13.v",
			"result": {
				"sys": "windows/x64",
				"dtime": Date.now(),
				"time": new Date(),
				"content": {
					"base": "utf",
					"message": {
						"text": "Success"
					}
				}
			}
		};

		res.status(200).json(result);
	}
}
