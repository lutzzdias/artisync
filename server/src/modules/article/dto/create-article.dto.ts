import {
    IsDate,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    MaxLength,
} from 'class-validator';

export class CreateArticleDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsString()
    @MaxLength(510)
    description?: string;

    @IsOptional()
    @IsString()
    link?: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsUUID()
    userId: string; // FK

    // statusId: string; // FK

    // projectId?: string; // FK

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}
