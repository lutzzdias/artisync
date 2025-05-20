"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusSchema = void 0;
const typeorm_1 = require("typeorm");
const status_entity_1 = require("../entity/status.entity");
exports.StatusSchema = new typeorm_1.EntitySchema({
    name: 'Status',
    target: status_entity_1.Status,
    tableName: 'Status',
    columns: {
        id: {
            type: String,
            primary: true,
            generated: 'uuid',
        },
        name: {
            type: String,
            length: 128,
        },
        description: {
            type: String,
            length: 255,
            nullable: true,
        },
        color: {
            type: String,
            length: 7,
        },
        userId: {
            type: 'uuid',
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
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            onDelete: 'CASCADE',
            nullable: true,
            joinColumn: {
                referencedColumnName: 'id',
                name: 'userId',
            },
        },
    },
});
//# sourceMappingURL=status.schema.js.map