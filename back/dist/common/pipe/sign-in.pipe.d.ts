import { PipeTransform } from '@nestjs/common';
import { SignInDto } from 'src/modules/auth/dto/signin.dto';
export declare class SignInPipe implements PipeTransform {
    transform(dto: SignInDto): SignInDto;
}
