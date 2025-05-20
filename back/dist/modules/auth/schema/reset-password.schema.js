"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordSchema = void 0;
const typeorm_1 = require("typeorm");
const reset_password_entity_1 = require("../entity/reset-password.entity");
exports.ResetPasswordSchema = new typeorm_1.EntitySchema({
    name: 'ResetPassword',
    target: reset_password_entity_1.ResetPassword,
    tableName: 'ResetPassword',
    columns: {
        id: {
            type: String,
            primary: true,
            generated: 'uuid',
        },
        userId: {
            type: 'uuid',
        },
        token: {
            type: String,
        },
        used: {
            type: Boolean,
            default: false,
        },
        expiresAt: {
            type: Date,
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
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            onDelete: 'CASCADE',
            nullable: false,
            joinColumn: {
                referencedColumnName: 'id',
                name: 'userId',
            },
        },
    },
});
//# sourceMappingURL=reset-password.schema.js.map