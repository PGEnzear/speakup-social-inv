//import bcrypt from "bcrypt";
import { inject, injectable } from "inversify";
//import uuid from "uuid";

import { TYPES as AuthTypes } from "../module/AuthorizationModuleTypes";
import { TYPES as UsersTypes } from "../../users/module/UsersModuleTypes"; 

import { SessionService } from "./SessionService";

import { UsersRepository } from "../../users/repositories/UsersRepository";

import "reflect-metadata";

@injectable()
export class AuthService {
	constructor(
		@inject(AuthTypes.SessionService)
		private readonly sessionService: SessionService,
		@inject(UsersTypes.UsersRepository)
		private readonly usersRepository: UsersRepository,
	) {}

	public async activate(activationLink: string) {
		/*
        const authData = await AuthDataModel.findOne({where: {activationLink}})
        if (!authData) {
            throw ApiError.BadRequest('Неккоректная ссылка активации')
        }
        if(authData.isActivated) {
          return "Email already activated"
        }
        authData.isActivated = true;
        await authData.save();
        return "Email successfully activated"
        */
	}

	public async login(email: string, password: string) {}
	/*
        const user = await this.usersRepository.findByEmail(email)
        if (!user) {
            return {
                "error": true,
                "result": {
                    "message": "User not found"
                }
            }
        }

        const authModel = await this.token.findOne({where: {UserId: user.id}})

        const isPassEquals = await bcrypt.compare(password, authModel.password);

        if (!isPassEquals) {
            return {
                "error": true,
                "result": {
                    "message": "Wrong password"
                }
            }
        }

        const userInfo = {
            email: user.email,
            id: user.id,
        }

        const tokens = this.tokenService.generateTokens(userInfo);

        await this.tokenService.saveToken(userInfo.id, tokens.refreshToken);
        return {...tokens, user: userInfo}
    }

    public logout(refreshToken: string) {

        return this.tokenService.removeToken(refreshToken);

    }

    public async refresh(refreshToken: string) {

        const userData = this.tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await this.tokenService.findToken(refreshToken);

        if (!userData || !tokenFromDb) {
            return {
                "error": true,
                "result": {
                    "message": "UnauthorizedError"
                }
            }
        }

        const user = await this.usersRepository.findById((userData as { id: number }).id);

        if(!user) {
            return {
                "error": true,
                "result": {
                    "message": "User not found"
                }
            }
        }
        
        const userInfo = {
            email: user.email,
            id: user.id,
        }

        const tokens =  this.tokenService.generateTokens(userInfo);

        await this.tokenService.saveToken(userInfo.id, tokens.refreshToken);
        return {...tokens, user: userInfo}
    }
*/
}
