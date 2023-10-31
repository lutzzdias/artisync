import { faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';

import { UserSchema } from 'src/modules/user/repository/typeorm/schema/user.schema';

export default setSeederFactory(UserSchema, () => {
    return <UserSchema>{
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        bio: faker.person.bio(),
        lastLogin: faker.date.recent(),
        deletedDefaultStates: [],
    };
});
