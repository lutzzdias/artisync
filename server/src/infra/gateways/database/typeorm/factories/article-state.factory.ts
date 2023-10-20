import { setSeederFactory } from 'typeorm-extension';

import { ArticleStateSchema } from 'src/modules/article-state/repository/typeorm/schema/article-state.schema';

export default setSeederFactory(ArticleStateSchema, (faker) => {
  return <ArticleStateSchema>{
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
  };
});
