"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUpdatedUsernameDateToUserTable1700453795512 = void 0;
const typeorm_1 = require("typeorm");
class AddUpdatedUsernameDateToUserTable1700453795512 {
    constructor() {
        this.tableColumn = new typeorm_1.TableColumn({
            name: 'updatedUsernameAt',
            type: 'timestamp',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn('User', this.tableColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('User', this.tableColumn);
    }
}
exports.AddUpdatedUsernameDateToUserTable1700453795512 = AddUpdatedUsernameDateToUserTable1700453795512;
//# sourceMappingURL=1700453795512-add-updated-username-date-to-user-table.js.map