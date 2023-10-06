import { Container, ContainerModule, interfaces } from "inversify";

import { S3Service } from "../services/S3Service";

import { TYPES } from "./S3ModuleTypes";

const s3Bindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<S3Service>(TYPES.S3Service).to(S3Service).inSingletonScope();
});

const s3Container = new Container();
s3Container.load(s3Bindings);

export { s3Container, s3Bindings };
