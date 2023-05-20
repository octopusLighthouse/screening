import path from "path";
import { ConnectionOptions } from "tls";

const typeOrmConfig = {
    type: 'postgres',
    host: 'postgres',
    port: 4582,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [path.join(__dirname, '../../**/*.entity.{ts,js}')],
    migrationsRun: false,
    migrations: [path.join(__dirname, '../../migrations/**/*.{ts,js}')],
    cli: {
        // Location of migration should be inside src folder
        // to be compiled into dist/ folder.
        migrationsDir: 'src/migrations',
    },
    synchronize: true,
};

export default typeOrmConfig;