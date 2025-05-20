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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const argon_helper_1 = require("../../../common/helper/argon.helper");
const user_service_1 = require("../../user/service/user.service");
const auth_repository_1 = require("../repository/auth.repository");
let AuthService = class AuthService {
    constructor(userService, jwtService, argonHelper, authRepository) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.argonHelper = argonHelper;
        this.authRepository = authRepository;
    }
    async updateRefreshToken(userId, refreshToken) {
        const hashedRefreshToken = await this.argonHelper.hash(refreshToken);
        await this.userService.refreshToken(userId, hashedRefreshToken);
    }
    generateTokens(userId) {
        const payload = { sub: userId };
        return {
            accessToken: this.jwtService.sign(payload, {
                secret: process.env.ACCESS_TOKEN_SECRET,
                expiresIn: '30m',
            }),
            refreshToken: this.jwtService.sign(payload, {
                secret: process.env.REFRESH_TOKEN_SECRET,
                expiresIn: '90d',
            }),
        };
    }
    async authenticateUserWithUsername(username, password) {
        const user = await this.userService.getByUsername(username);
        if (user &&
            (await this.argonHelper.isHashValid(user.password, password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async authenticateUserWithEmail(email, password) {
        const user = await this.userService.getByEmail(email);
        if (user &&
            (await this.argonHelper.isHashValid(user.password, password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async signin(signInDto) {
        let user;
        if (signInDto.username)
            user = await this.authenticateUserWithUsername(signInDto.username, signInDto.password);
        else
            user = await this.authenticateUserWithEmail(signInDto.email, signInDto.password);
        if (!user)
            throw new common_1.ForbiddenException('Invalid credentials');
        const tokens = this.generateTokens(user.id);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }
    async register(registerDto) {
        registerDto.password = await this.argonHelper.hash(registerDto.password);
        const user = { ...registerDto };
        const result = await this.userService.create(user);
        if (!result)
            throw common_1.InternalServerErrorException;
        const tokens = this.generateTokens(result.id);
        await this.updateRefreshToken(result.id, tokens.refreshToken);
        return tokens;
    }
    async changePassword(changePasswordDto) {
        const { email, currentPassword, newPassword } = changePasswordDto;
        const user = await this.userService.getByEmail(email);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const isCurrentPasswordValid = await this.argonHelper.isHashValid(user.password, currentPassword);
        if (!isCurrentPasswordValid)
            throw new common_1.ForbiddenException('Invalid credentials');
        const hashedNewPassword = await this.argonHelper.hash(newPassword);
        await this.userService.changePassword(user.id, hashedNewPassword);
    }
    async forgotPassword(forgotPasswordDto) {
        const { email } = forgotPasswordDto;
        const user = await this.userService.getByEmail(email);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const payload = { sub: user.id };
        const token = this.jwtService.sign(payload, {
            secret: process.env.RESET_PASSWORD_TOKEN_SECRET,
            expiresIn: '15m',
        });
        const resetPassword = {
            userId: user.id,
            token,
            used: false,
            expiresAt: new Date(Date.now() + 15 * 60 * 1000),
        };
        await this.authRepository.create(resetPassword);
    }
    async resetPassword(token, resetPasswordDto) {
        const { email, password } = resetPasswordDto;
        const user = await this.userService.getByEmail(email);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const payload = await this.jwtService.verifyAsync(token, {
            secret: process.env.RESET_PASSWORD_TOKEN_SECRET,
        });
        const userId = payload.sub;
        if (userId !== user.id)
            throw new common_1.ForbiddenException('Access denied');
        const instance = await this.authRepository.getByToken(token);
        if (!instance)
            throw new common_1.NotFoundException('Token not found');
        if (instance.used)
            throw new common_1.ForbiddenException('Token already used');
        if (instance.expiresAt < new Date())
            throw new common_1.ForbiddenException('Token expired');
        instance.used = true;
        instance.expiresAt = new Date();
        await this.authRepository.invalidate(instance);
        const hashedPassword = await this.argonHelper.hash(password);
        await this.userService.changePassword(user.id, hashedPassword);
        await this.logout(user.id);
    }
    async logout(userId) {
        await this.userService.refreshToken(userId, null);
    }
    async refresh(userId, refreshToken) {
        const user = await this.userService.getById(userId);
        if (!user || !user.refreshToken)
            throw common_1.ForbiddenException;
        const isRefreshTokenValid = await this.argonHelper.isHashValid(user.refreshToken, refreshToken);
        if (!isRefreshTokenValid)
            throw new common_1.ForbiddenException('Access denied');
        const tokens = this.generateTokens(user.id);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        argon_helper_1.ArgonHelper,
        auth_repository_1.AuthRepository])
], AuthService);
//# sourceMappingURL=auth.service.js.map