"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const argon = require("argon2");
const user_entity_1 = require("../../../modules/user/entity/user.entity");
const typeorm_extension_1 = require("typeorm-extension");
exports.default = (0, typeorm_extension_1.setSeederFactory)(user_entity_1.User, async () => {
    return {
        email: faker_1.faker.internet.email(),
        username: faker_1.faker.internet.userName(),
        password: await argon.hash(faker_1.faker.internet.password()),
        bio: faker_1.faker.person.bio(),
        image: faker_1.faker.internet.url(),
        refreshToken: await argon.hash(faker_1.faker.database.mongodbObjectId()),
        lastLogin: faker_1.faker.date.recent(),
        deletedDefaultStates: [],
    };
});
//# sourceMappingURL=user.factory.js.map