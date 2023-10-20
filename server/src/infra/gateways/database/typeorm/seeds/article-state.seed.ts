import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

import { ArticleStateSchema } from 'src/modules/article-state/repository/typeorm/schema/article-state.schema';

export default class ArticleStateSeed implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const articleStateFactory = await factoryManager.get(ArticleStateSchema);
    await articleStateFactory.saveMany(10);
  }
}
