import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClient implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "cpf",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "data_criacao",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("client");
  }
}
