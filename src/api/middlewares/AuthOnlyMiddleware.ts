import { injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";

import { Request, Response, NextFunction } from "express";

@injectable()
export class AuthOnlyMiddleware extends BaseMiddleware {

	public handler(
		req: Request,
		res: Response,
		next: NextFunction
	): void {
        
		const session = req.session;

		console.log(session);

		next();
	}



}