import { Container } from "inversify";

//Modules
import { redisContainer } from "../../redis/module/RedisModule";
import { mailContainer } from "../../mail/module/MailModule";
import { s3Container } from "../../s3/module/S3Module";
import { prismaContainer } from "../../prisma/module/PrismaModule";
import { loggerContainer } from "../../logger/module/LoggerModule";
import { apiContainer } from "../../api/module/ApiModule";
import { appContainer } from "../../app/module/AppModule";

const rootContainer = Container.merge(
	loggerContainer,
	mailContainer,
	s3Container,
	prismaContainer,
	redisContainer,
	apiContainer,
	appContainer,
);

export default rootContainer;
