import { Container, ContainerModule, interfaces } from "inversify";

import { LoggerService } from "../services/LoggerService";

import { TYPES } from "./LoggerModuleTypes";

const loggerBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<LoggerService>(TYPES.LoggerService).to(LoggerService).inSingletonScope();
});

const loggerContainer = new Container();
loggerContainer.load(loggerBindings);

export { loggerContainer, loggerBindings };
