import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePhoneNumbers1645062829408 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "telefone",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "numero_telefone",
            type: "varchar",
          },
          {
            name: "client_id",
            type: "varchar",
            generationStrategy: "uuid",
          },
          {
            name: "data_criacao",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "telefone_ibfk_1",
            columnNames: ["client_id"],
            referencedTableName: "client",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("telefone");
  }
}
