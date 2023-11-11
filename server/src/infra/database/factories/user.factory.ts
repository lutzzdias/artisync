// import { faker } from '@faker-js/faker';
// import * as argon from 'argon2';
// import { setSeederFactory } from 'typeorm-extension';

// import { UserSchema } from 'src/modules/user/repository/typeorm/schema/user.schema';

// export default setSeederFactory(UserSchema, async () => {
//     return <UserSchema>{
//         email: faker.internet.email(),
//         username: faker.internet.userName(),
//         password: await argon.hash(faker.internet.password()),
//         bio: faker.person.bio(),
//         refreshToken: await argon.hash(faker.database.mongodbObjectId()),
//         lastLogin: faker.date.recent(),
//         deletedDefaultStates: [],
//     };
// });
