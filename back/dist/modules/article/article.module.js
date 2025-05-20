"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("../user/user.module");
const article_controller_1 = require("./controller/article.controller");
const article_repository_1 = require("./repository/article.repository");
const article_schema_1 = require("./schema/article.schema");
const article_service_1 = require("./service/article.service");
let ArticleModule = class ArticleModule {
};
exports.ArticleModule = ArticleModule;
exports.ArticleModule = ArticleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([article_schema_1.ArticleSchema]), user_module_1.UserModule],
        controllers: [article_controller_1.ArticleController],
        providers: [article_service_1.ArticleService, article_repository_1.ArticleRepository],
    })
], ArticleModule);
//# sourceMappingURL=article.module.js.map