import { faker } from '@faker-js/faker';
import * as argon from 'argon2';
import { User } from 'src/modules/user/entity/user.entity';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(User, async () => {
    return <User>{
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: await argon.hash(faker.internet.password()),
        bio: faker.person.bio(),
        image: faker.internet.url(),
        refreshToken: await argon.hash(faker.database.mongodbObjectId()),
        lastLogin: faker.date.recent(),
        deletedDefaultStates: [],
    };
});
