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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../user/service/user.service");
const article_repository_1 = require("../repository/article.repository");
let ArticleService = class ArticleService {
    constructor(articleRepository, userService) {
        this.articleRepository = articleRepository;
        this.userService = userService;
    }
    async create(article) {
        const result = await this.articleRepository.create(article);
        return result;
    }
    async getAll() {
        const result = await this.articleRepository.getAll();
        return result;
    }
    async getByUserId(userId) {
        const user = await this.userService.getById(userId);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const articles = await this.articleRepository.getByUserId(userId);
        return articles;
    }
    async getById(id) {
        const result = await this.articleRepository.getById(id);
        return result;
    }
    async update(id, updateArticleDto) {
        const article = await this.articleRepository.getById(id);
        if (!article)
            throw new common_1.NotFoundException('Article not found');
        const { ...updatedArticleData } = updateArticleDto;
        const updatedArticle = {
            id: id,
            title: updatedArticleData.title ?? article.title,
            description: updatedArticleData.description ?? article.description,
            link: updatedArticleData.link ?? article.link,
            author: updatedArticleData.author ?? article.author,
            userId: article.userId,
            statusId: updateArticleDto.statusId ?? article.statusId,
            createdAt: article.createdAt,
            updatedAt: new Date(),
        };
        const result = await this.articleRepository.update(updatedArticle);
        return result;
    }
    async delete(id) {
        const article = await this.articleRepository.getById(id);
        if (!article)
            throw new common_1.NotFoundException('Article not found');
        const result = await this.articleRepository.delete(id);
        return result;
    }
};
exports.ArticleService = ArticleService;
exports.ArticleService = ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [article_repository_1.ArticleRepository,
        user_service_1.UserService])
], ArticleService);
//# sourceMappingURL=article.service.js.map