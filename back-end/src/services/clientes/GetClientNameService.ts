import { getRepository } from "typeorm";
import { Client } from "../../entities/Client";

export class GetClientNameService {
  async execute(nome: string) {
    const repository = getRepository(Client);
    const clientName = await repository.findOne(nome);
    if (!(await repository.findOne(nome))) {
      return new Error("Cliente não existe!");
    }

    return clientName;
  }
}
