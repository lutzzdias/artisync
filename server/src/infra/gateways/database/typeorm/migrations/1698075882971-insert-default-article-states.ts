import { ArticleStateSchema } from 'src/modules/article-state/repository/typeorm/schema/article-state.schema';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertDefaultArticleStates1698075882971
  implements MigrationInterface
{
  private states = [
    {
      name: 'To read',
      description: 'Still needs to be read',
    },
    {
      name: 'In progress',
      description: 'Currently being read',
    },
    {
      name: 'Done',
      description: 'Read and relevant',
    },
    {
      name: 'Abandoned',
      description: 'Not relevant',
    },
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(ArticleStateSchema)
      .values(this.states)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(ArticleStateSchema)
      .where('name IN (:...names)', {
        names: this.states.map((state) => state.name),
      })
      .execute();
  }
}
