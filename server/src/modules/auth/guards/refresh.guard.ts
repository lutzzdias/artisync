import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Runs JWT strategy before controller method
@Injectable()
export class RefreshTokenGuard extends AuthGuard('refresh-token') {}
