"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("../user/user.module");
const status_controller_1 = require("./controller/status.controller");
const status_repository_1 = require("./repository/status.repository");
const status_schema_1 = require("./schema/status.schema");
const status_service_1 = require("./service/status.service");
let StatusModule = class StatusModule {
};
exports.StatusModule = StatusModule;
exports.StatusModule = StatusModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, typeorm_1.TypeOrmModule.forFeature([status_schema_1.StatusSchema])],
        controllers: [status_controller_1.StatusController],
        providers: [status_service_1.StatusService, status_repository_1.StatusRepository],
    })
], StatusModule);
//# sourceMappingURL=status.module.js.map