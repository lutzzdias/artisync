import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'artisync-db',
  entities: ['dist/**/*.schema.{js,ts}', 'src/**/*.schema.{js,ts}'], // TODO: check why __dirname does not work here
  migrations: [`${__dirname}/**/migrations/**/*.{js,ts}`],
  seeds: [`${__dirname}/**/seeds/**/*.{js,ts}`],
  factories: [`${__dirname}/**/factories/**/*.{js,ts}`],
  synchronize: false,
};

const cliConfig = {
  migrationsDir: `${__dirname}/infra/gateways/database/typeorm/migrations`,
};

const dataSource = new DataSource(dataSourceOptions);
Object.assign(dataSourceOptions, { cli: cliConfig });
export default dataSource;
