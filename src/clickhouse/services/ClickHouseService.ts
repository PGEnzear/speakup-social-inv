import { injectable } from "inversify";

import { createClient } from "@clickhouse/client"


@injectable()
export class ClickHouseServce {

    constructor() {

        this.client = createClient({})

    }

}