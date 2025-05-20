"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../../../modules/user/entity/user.entity");
class UserSeed {
    async run(_, factoryManager) {
        const userFactory = factoryManager.get(user_entity_1.User);
        await userFactory.saveMany(10);
    }
}
exports.default = UserSeed;
//# sourceMappingURL=user.seed.js.map