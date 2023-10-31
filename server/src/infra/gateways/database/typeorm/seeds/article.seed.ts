import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

import { ArticleSchema } from 'src/modules/article/repository/typeorm/schema/article.schema';

export default class ArticleSeed implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const articleFactory = await factoryManager.get(ArticleSchema);
        await articleFactory.saveMany(10);
    }
}
