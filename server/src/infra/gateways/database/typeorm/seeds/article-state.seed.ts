import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class ArticleStateSeed implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    // Commented out in order to keep only the default states in the database
    // const articleStateFactory = await factoryManager.get(ArticleStateSchema);
    // await articleStateFactory.saveMany(10);
  }
}
