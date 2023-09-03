// TODO: Add nest decorators (@ApiProperty, @IsString, etc)
export class CreateArticleDto {
  title: string;
  author: string; // TODO: change string -> Author entity
  description: string;
  link: string;
  state: string; // TODO: change string -> Enum value
}
