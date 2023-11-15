import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';

@Injectable()
export class ArgonHelper {
    async isHashValid(hash: string, text: string): Promise<boolean> {
        return argon.verify(hash, text);
    }

    async hash(text: string): Promise<string> {
        return argon.hash(text);
    }
}
