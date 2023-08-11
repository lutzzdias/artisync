export interface IArticleSchema {
  id?: string;
  title: string;
  author: string; // TODO: change string -> Author entity
  description: string;
  link: string;
  state: string; // TODO: change string -> Enum value
  createdAt?: Date;
  updatedAt?: Date;
}
