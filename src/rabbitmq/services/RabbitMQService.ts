import { injectable } from "inversify";

import amqplib from "amqplib"


@injectable()
export class RabbitMQService {

    constructor() {

        this.client = new amqplib();

    }

}