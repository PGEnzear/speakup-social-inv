import { Container, ContainerModule, interfaces } from "inversify";

import { HttpServer } from "../services/HttpServer";

import { TYPES } from "./ApiModuleTypes";

const apiBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<HttpServer>(TYPES.HttpServer).to(HttpServer).inSingletonScope();
});

const apiContainer = new Container();
apiContainer.load(apiBindings);

export { apiContainer, apiBindings};
