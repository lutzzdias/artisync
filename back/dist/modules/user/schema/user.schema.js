"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entity/user.entity");
exports.UserSchema = new typeorm_1.EntitySchema({
    name: 'User',
    target: user_entity_1.User,
    tableName: 'User',
    columns: {
        id: {
            type: String,
            primary: true,
            generated: 'uuid',
        },
        username: {
            type: String,
            length: 255,
        },
        email: {
            type: String,
            length: 255,
        },
        password: {
            type: String,
            length: 255,
        },
        bio: {
            type: 'text',
            nullable: true,
        },
        image: {
            type: String,
            length: 255,
            nullable: true,
        },
        refreshToken: {
            type: String,
            length: 510,
            nullable: true,
        },
        updatedUsernameAt: {
            type: Date,
            nullable: true,
        },
        createdAt: {
            type: Date,
            createDate: true,
        },
        updatedAt: {
            type: Date,
            updateDate: true,
        },
    },
});
//# sourceMappingURL=user.schema.js.map