export class Article {
    id?: string; // Optional to allow db to generate id
    title: string;
    description?: string;
    link?: string;
    author: string;
    userId: string; // FK
    // statusId: string; // FK
    // projectId?: string; // FK
    createdAt?: Date;
    updatedAt?: Date;
}
