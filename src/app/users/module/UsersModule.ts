import { Container, ContainerModule, interfaces } from "inversify";

//Repositories
import { UsersRepository } from "../repositories/UsersRepository";

//Services
import { UsersService } from "../services/UsersService";

import { TYPES } from "./UsersModuleTypes";

const usersBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<UsersService>(TYPES.UsersService).to(UsersService);
	bind<UsersRepository>(TYPES.UsersRepository).to(UsersRepository);
});

const usersContainer = new Container();
usersContainer.load(usersBindings);

export { usersContainer, usersBindings };
