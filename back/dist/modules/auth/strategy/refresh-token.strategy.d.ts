import type { Request } from 'express';
import { Strategy } from 'passport-jwt';
type JwtPayload = {
    sub: string;
    refreshToken: string;
};
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    constructor();
    validate(req: Request, payload: JwtPayload): JwtPayload;
}
export {};
