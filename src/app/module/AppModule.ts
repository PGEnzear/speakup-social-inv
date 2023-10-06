import { Container } from "inversify";

//Modules
import { usersContainer } from "../users/module/UsersModule";
import { authContainer } from "../authorization/module/AuthorizationModule";

const appContainer = Container.merge(authContainer, usersContainer);

export { appContainer };
