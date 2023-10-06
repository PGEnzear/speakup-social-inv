import moduleAlias from "module-alias";

moduleAlias.addAlias("@", __dirname);
moduleAlias();

import rootContainer from "./inversify/prod/container";

//Types
import { TYPES as PrismaTypes } from "./prisma/module/PrismaModuleTypes";
import { TYPES as RedisTypes } from "./redis/module/RedisModuleTypes";
import { TYPES as ApiTypes } from "./api/module/ApiModuleTypes";

//Services
import { HttpServer } from "./api/services/HttpServer";
import { PrismaService } from "./prisma/services/PrismaService";
import { RedisService } from "./redis/services/RedisService";

const bootstrap = async () => {
	try {
		
		const prisma = rootContainer.get<PrismaService>(PrismaTypes.PrismaService);
		const redis = rootContainer.get<RedisService>(RedisTypes.RedisService);
		const api = rootContainer.get<HttpServer>(ApiTypes.HttpServer);

		await redis.connect();

		await prisma.connect();

		await api.start();

	} catch (e) {
		console.log(e);
	}
};

const prod = true;

if (prod) {
	//ray cast lmao
	bootstrap();
}
