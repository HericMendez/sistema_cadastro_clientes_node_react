import { Telefone } from '../../entities/Telefone';
import { Client } from "../../entities/Client";

import { getRepository } from "typeorm";


type TelefoneRequest = {
  numero_telefone: string;
  clientId: string;
};

export class CreatePhoneService {
  async execute({ numero_telefone, clientId }: TelefoneRequest) {
    const repository = getRepository(Telefone);
    const repoClient = getRepository(Client);

    if (!(await repoClient.findOne(clientId))) {
      return new Error("Cliente não cadastrado!");
    }

    const telefone = repository.create({
      numero_telefone,
      clientId,
    });


    await repository.save(telefone);
    return telefone;
  }
}


/*
type TelefoneRequest = {
  numero_telefone: string;
  clientId: string;
};

export class CreatePhoneService {
  async execute({
    numero_telefone,
    clientId,
  }: TelefoneRequest) {
    const repository = getRepository(Telefone);
    const repoClient = getRepository(Client);

    if (!(await repoClient.findOne(clientId))) {
      return new Error("Cliente não cadastrado!");
    }

    const telefone = repository.create({
      numero_telefone,
      clientId,
    });

    await repository.save(telefone);
    return telefone;
  }
}
*/