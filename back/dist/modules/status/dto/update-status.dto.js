"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_status_dto_1 = require("./create-status.dto");
class UpdateStatusDto extends (0, mapped_types_1.PartialType)(create_status_dto_1.CreateStatusDto) {
}
exports.UpdateStatusDto = UpdateStatusDto;
//# sourceMappingURL=update-status.dto.js.map