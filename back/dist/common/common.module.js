"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const access_token_strategy_1 = require("../modules/auth/strategy/access-token.strategy");
const refresh_token_strategy_1 = require("../modules/auth/strategy/refresh-token.strategy");
const argon_helper_1 = require("./helper/argon.helper");
const sign_in_pipe_1 = require("./pipe/sign-in.pipe");
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: [
            access_token_strategy_1.AccessTokenStrategy,
            refresh_token_strategy_1.RefreshTokenStrategy,
            argon_helper_1.ArgonHelper,
            sign_in_pipe_1.SignInPipe,
        ],
        exports: [
            access_token_strategy_1.AccessTokenStrategy,
            refresh_token_strategy_1.RefreshTokenStrategy,
            argon_helper_1.ArgonHelper,
            sign_in_pipe_1.SignInPipe,
        ],
    })
], CommonModule);
//# sourceMappingURL=common.module.js.map