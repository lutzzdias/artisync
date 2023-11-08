import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Runs local strategy before controller method
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
