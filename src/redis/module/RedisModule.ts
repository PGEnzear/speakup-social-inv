import { Container, ContainerModule, interfaces } from "inversify";

import { RedisService } from "../services/RedisService";

import { TYPES } from "./RedisModuleTypes";

const redisBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<RedisService>(TYPES.RedisService).to(RedisService).inSingletonScope();
});

const redisContainer = new Container();
redisContainer.load(redisBindings);

export { redisContainer, redisBindings };
