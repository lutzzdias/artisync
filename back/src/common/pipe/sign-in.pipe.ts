import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { SignInDto } from 'src/modules/auth/dto/signin.dto';

@Injectable()
export class SignInPipe implements PipeTransform {
    transform(dto: SignInDto) {
        if (!dto.username && !dto.email)
            throw new BadRequestException('You must provide username or email');
        else return dto;
    }
}
