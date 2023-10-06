import { inject, injectable } from "inversify";

import { TYPES as AuthTypes } from "../module/AuthorizationModuleTypes";

import { SessionRepository } from "../repositories/SessionRepository";

import "reflect-metadata";

@injectable()
export class SessionService {
	constructor(
		@inject(AuthTypes.SessionRepository)
		private readonly sessionRepository: SessionRepository,
	) {}

	/*

    public generateTokens(payload: string | object | Buffer) {
        const accessToken = jwt.sign(payload, config.JWT.JWT_ACCESS_SECRET, { expiresIn: config.JWT.JWT_ACCESS_LIFETIME })
        const refreshToken = jwt.sign(payload, config.JWT.JWT_REFRESH_SECRET, { expiresIn: config.JWT.JWT_REFRESH_LIFETIME })
        return {
            accessToken,
            refreshToken
        }
    }

    public validateAccessToken(token: string) {
        try {
            const userData = jwt.verify(token, config.JWT.JWT_ACCESS_SECRET);

            return userData;
        } catch (e) {
            return null;
        }
    }

    public validateRefreshToken(token: string) {
        try {
            const userData = jwt.verify(token, config.JWT.JWT_REFRESH_SECRET);

            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId: number, refreshToken: string) {

        return this.tokenRepository.getClient().update({
            where: {
                userId
            },
            data: {
                refreshToken,
                refreshTokenDeleted: false
            }
        })
    }

    async removeToken(refreshToken: string) {
        
        const token = await this.tokenRepository.findByRefreshToken(refreshToken)

        if(!token) {
            return {
                "error": true,
                "message": {
                    "result": "Token does not exist"
                }
            }
        }

        return this.tokenRepository.delete(token.id);

    }

    public async findToken(refreshToken: string) {
        /*
        const token = await this.tokenRepository.findByRefreshToken(refreshToken);

        if(token?.refreshTokenDeleted) {
            return undefined
        } else {
            return token;
        }


    }
    */
}
