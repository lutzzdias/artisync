"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    username: process.env.POSTGRES_USER || 'admin',
    password: process.env.POSGRES_PASSWORD || 'admin',
    database: process.env.POSTGRES_DB || 'artisync-db',
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
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
Object.assign(exports.dataSourceOptions, { cli: cliConfig });
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map