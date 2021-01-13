import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateFilesTable1610562050352 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: 'files',
      columns: [

      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
