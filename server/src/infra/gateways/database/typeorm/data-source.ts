import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'artisync-db',
  entities: [`${__dirname}/modules/**/*.schema.js`],
  migrations: [`${__dirname}/**/migrations/**/*.js`],
  seeds: [`${__dirname}/**/seeds/**/*.js`],
  factories: [`${__dirname}/**/factories/**/*.js`],
  synchronize: false,
};

const cliConfig = {
  migrationsDir: `${__dirname}/infra/gateways/database/typeorm/migrations`,
};

const dataSource = new DataSource(dataSourceOptions);
Object.assign(dataSourceOptions, { cli: cliConfig });
export default dataSource;
