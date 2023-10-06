import { Container, ContainerModule, interfaces } from "inversify";

//Repositories
import { AuthRepository } from "../repositories/AuthRepository";
import { SessionRepository } from "../repositories/SessionRepository";

//Services
import { AuthService } from "../services/AuthService";
import { SessionService } from "../services/SessionService";

import { TYPES } from "./AuthorizationModuleTypes";

const authBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<AuthService>(TYPES.AuthService).to(AuthService);
	bind<SessionRepository>(TYPES.SessionRepository).to(SessionRepository);
	bind<AuthRepository>(TYPES.AuthRepository).to(AuthRepository);
	bind<SessionService>(TYPES.SessionService).to(SessionService);
});

const authContainer = new Container();
authContainer.load(authBindings);

export { authContainer, authBindings };
