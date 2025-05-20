import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
export default class UserSeed implements Seeder {
    run(_: DataSource, factoryManager: SeederFactoryManager): Promise<any>;
}
