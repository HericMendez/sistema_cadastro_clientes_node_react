import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClient1645054744949 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "nome",
            type: "varchar",
            isUnique: true,
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
