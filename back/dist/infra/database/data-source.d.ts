import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
export declare const dataSourceOptions: DataSourceOptions & SeederOptions;
declare const dataSource: DataSource;
export default dataSource;
