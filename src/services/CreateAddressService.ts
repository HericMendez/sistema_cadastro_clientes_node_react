import { Client } from "./../entities/Client";
import { Endereco } from "./../entities/Endereco";
import { getRepository } from "typeorm";

type EnderecoRequest = {
  rua: string;
  cidade: string;
  cep: string;
  client_id: string;
};

export class CreateAddressService {
  async execute({
    rua,
    cidade,
    cep,
    client_id,
  }: EnderecoRequest) {
    const repository = getRepository(Endereco);
    const repoClient = getRepository(Client);

    if (!(await repoClient.findOne(client_id))) {
      return new Error("Cliente não cadastrado!");
    }

    const endereco = repository.create({
      rua,
      cidade,
      cep,
      client_id,
    });

    await repository.save(endereco);
    return endereco;
  }
}
