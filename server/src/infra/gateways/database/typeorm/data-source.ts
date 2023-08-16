import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'artisync',
  entities: ['dist/modules/**/*.schema.typeorm.impl.js'],
  synchronize: process.env.ENVIRONMENT_TYPE === 'dev',
  migrationsTableName: 'Migrations',
  migrations: [`${__dirname}/migrations/**/*.ts`],
  seeds: [`${__dirname}/seeds/**/*.ts`],
  factories: [`${__dirname}/factories/**/*.ts`],
};

const cliConfig = {
  migrationsDir: 'src/infra/gateways/database/typeorm/migrations',
};

const dataSource = new DataSource(dataSourceOptions);
Object.assign(dataSourceOptions, { cli: cliConfig });
export default dataSource;
