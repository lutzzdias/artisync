import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateArticleTable1692735423140 implements MigrationInterface {
  private table = new Table({
    name: 'article',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        isNullable: false,
        isUnique: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      },
      {
        name: 'title',
        type: 'varchar',
        isNullable: false,
        isUnique: false,
      },
      {
        name: 'author',
        type: 'varchar',
        isNullable: false,
        isUnique: false,
      },
      {
        name: 'description',
        type: 'varchar',
      },
      {
        name: 'link',
        type: 'varchar',
      },
      {
        name: 'state',
        type: 'varchar',
      },
      {
        name: 'createdAt',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updatedAt',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
