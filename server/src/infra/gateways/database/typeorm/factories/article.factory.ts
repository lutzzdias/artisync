import { setSeederFactory } from 'typeorm-extension';

import { ArticleState } from 'src/modules/article/domain/entities/article.entity';
import { ArticleSchema } from 'src/modules/article/repository/typeorm/schema/article.schema';

export default setSeederFactory(ArticleSchema, (faker) => {
  return <ArticleSchema>{
    title: faker.commerce.productName(),
    author: faker.person.fullName(),
    description: faker.commerce.productDescription(),
    link: faker.internet.url(),
    state: ArticleState.toRead,
  };
});
