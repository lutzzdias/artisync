import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    username: process.env.POSTGRES_USER || 'admin',
    password: process.env.POSGRES_PASSWORD || 'admin',
    database: process.env.POSTGRES_DB || 'artisync',
    entities: ['dist/**/*.schema.{js,ts}'],
    migrations: [`${__dirname}/**/migration/**/*.{js,ts}`],
    seeds: [`${__dirname}/**/seed/**/*.{js,ts}`],
    factories: [`${__dirname}/**/factory/**/*.{js,ts}`],
    synchronize: false,
    migrationsTableName: 'Migrations',
};

const cliConfig = {
    migrationsDir: `${__dirname}/infra/database/migration`,
};

const dataSource = new DataSource(dataSourceOptions);
Object.assign(dataSourceOptions, { cli: cliConfig });
export default dataSource;
