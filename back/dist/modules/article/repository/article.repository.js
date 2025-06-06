"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const article_entity_1 = require("../entity/article.entity");
let ArticleRepository = class ArticleRepository {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async create(article) {
        const result = await this.articleRepository.save(article);
        return result;
    }
    async getAll() {
        const result = await this.articleRepository.find();
        return result;
    }
    async getById(id) {
        const options = { where: { id } };
        const result = await this.articleRepository.findOne(options);
        return result;
    }
    async getByUserId(userId) {
        const options = { where: { userId } };
        const result = await this.articleRepository.find(options);
        return result;
    }
    async update(article) {
        await this.articleRepository.update(article.id, article);
        return article;
    }
    async delete(id) {
        await this.articleRepository.delete(id);
    }
};
exports.ArticleRepository = ArticleRepository;
exports.ArticleRepository = ArticleRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(article_entity_1.Article)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArticleRepository);
//# sourceMappingURL=article.repository.js.map