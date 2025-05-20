import { User } from 'src/modules/user/entity/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class UserSeed implements Seeder {
    public async run(
        _: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const userFactory = factoryManager.get(User);
        await userFactory.saveMany(10);
    }
}
