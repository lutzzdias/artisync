import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from './public.guard';

// Runs JWT strategy before controller method
@Injectable()
export class JwtAuthGuard extends AuthGuard('access-token') {
    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext): boolean {
        // Alow anonymous access when @AllowAnon() decorator is used
        const isPublic = this.reflector.getAllAndOverride<boolean>(
            IS_PUBLIC_KEY,
            [context.getHandler(), context.getClass()],
        );
        if (isPublic) {
            return true;
        }

        return super.canActivate(context) as boolean;
    }
}
