import { Telefone } from '../../entities/Telefone';
import { Client } from "../../entities/Client";

import { getRepository } from "typeorm";

type TelefoneRequest = {
  numero_telefone: string;
  client_id: string;
};

export class CreatePhoneService {
  async execute({
    numero_telefone,
    client_id,
  }: TelefoneRequest) {
    const repository = getRepository(Telefone);
    const repoClient = getRepository(Client);

    if (!(await repoClient.findOne(client_id))) {
      return new Error("Cliente não cadastrado!");
    }

    const telefone = repository.create({
      numero_telefone,
      client_id,
    });

    await repository.save(telefone);
    return telefone;
  }
}