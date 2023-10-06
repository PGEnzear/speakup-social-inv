import { Container, ContainerModule, interfaces } from "inversify";

import { PrismaService } from "../services/PrismaService";

import { TYPES } from "./PrismaModuleTypes";

const prismaBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
});

const prismaContainer = new Container();
prismaContainer.load(prismaBindings);

export { prismaContainer, prismaBindings };
