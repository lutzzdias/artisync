import { IArticleSchema } from 'src/modules/article/domain/interfaces/article.schema.interface';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'article' })
export class ArticleSchema implements IArticleSchema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 255 })
  author: string;

  @Column({ length: 510 })
  description: string;

  @Column({ length: 255 })
  link: string;

  @Column({ length: 255 })
  state: string; // TODO: change string -> Enum value

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @CreateDateColumn()
  createdAt?: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  @UpdateDateColumn()
  updatedAt?: Date;
}