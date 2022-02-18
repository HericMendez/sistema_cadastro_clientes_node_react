import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddress1645061730019 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "endereco",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },

          {
            name: "rua",
            type: "varchar",
          },
          {
            name: "cidade",
            type: "varchar",
          },
          {
            name: "cep",
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
            name: "fk_enderecos_cliente",
            columnNames: ["client_id"],
            referencedTableName: "client",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("endereco");
  }
}
