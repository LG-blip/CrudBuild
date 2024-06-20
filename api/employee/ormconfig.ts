import { createEmployee } from "src/entity/employee.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "postgres",
    username: "postgres",
    password: "lgpostgres",
    host: "localhost",
    port: 5432,
    entities: [createEmployee],
    synchronize: true,
}

export default config;