import { Container, ContainerModule, interfaces } from "inversify";

import { MailService } from "../services/MailService";

import { TYPES } from "./MailModuleTypes";

const mailBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<MailService>(TYPES.MailService).to(MailService).inSingletonScope();
});

const mailContainer = new Container();
mailContainer.load(mailBindings);

export { mailContainer, mailBindings };
