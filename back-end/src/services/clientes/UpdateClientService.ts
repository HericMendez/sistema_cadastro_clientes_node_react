import { getRepository } from "typeorm";
import { Client } from "../../entities/Client";

type ClientUpdateRequest = {
  id: string;
  nome: string;
  cpf: string;
};

export class UpdateClientService {
  async execute({ id, nome, cpf }: ClientUpdateRequest) {
    const repository = getRepository(Client);

    const client = await repository.findOne(id);
    if (!client) {
      return new Error("Cliente não cadastrado!");
    }
    client.nome = nome ? nome : client.nome;
    client.cpf = cpf ? cpf : client.cpf;

    await repository.save(client);
  }
}
