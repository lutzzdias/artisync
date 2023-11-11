import { IsDate, IsOptional } from 'class-validator';

export class CreateArticleDto {
    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}
