import { Client } from "../../entities/Client";
import { Endereco } from "../../entities/Endereco";
import { getRepository } from "typeorm";

type EnderecoRequest = {
  rua: string;
  cidade: string;
  cep: string;
  clientId: string;
};

export class CreateAddressService {
  async execute({ rua, cidade, cep, clientId }: EnderecoRequest) {
    const repository = getRepository(Endereco);
    const repoClient = getRepository(Client);

    if (!(await repoClient.findOne(clientId))) {
      return new Error("Cliente não cadastrado!");
    }

    const endereco = repository.create({
      rua,
      cidade,
      cep,
      clientId,
    });

    await repository.save(endereco);
    return endereco;
  }
}
