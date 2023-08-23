export interface IArticleSchema {
  id?: string;
  title: string;
  author: string;
  description: string;
  link: string;
  state: string; // TODO: change string -> Enum value
  createdAt?: Date;
  updatedAt?: Date;
}
