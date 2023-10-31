import { faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';

import { ArticleStateSchema } from 'src/modules/article-state/repository/typeorm/schema/article-state.schema';

export default setSeederFactory(ArticleStateSchema, () => {
    return <ArticleStateSchema>{
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
    };
});
