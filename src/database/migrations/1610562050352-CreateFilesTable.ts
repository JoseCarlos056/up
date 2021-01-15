import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateFilesTable1610562050352 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: 'files',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'directory',
          type: 'varchar'
        }, {
          name: 'userId',
          type: 'varchar'
        }

      ],
      foreignKeys: [
        {
          columnNames: ['userId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'CASCADE'

        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('files')
  }
}
