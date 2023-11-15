import {
    IsDate,
    IsHexColor,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    MaxLength,
} from 'class-validator';

export class CreateStatusDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    name: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    description?: string;

    @IsHexColor()
    @IsNotEmpty()
    color: string;

    @IsOptional()
    @IsUUID()
    userId?: string;

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}
