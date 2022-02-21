import { Endereco } from "../../entities/Endereco";
import { getRepository } from "typeorm";

type AddressUpdateRequest = {
  id: string;
  rua: string;
  cidade: string;
  cep: string;
};

export class UpdateAdressService {
  async execute({ id, rua, cidade, cep }: AddressUpdateRequest) {
    const repository = getRepository(Endereco);

    const endereco = await repository.findOne(id);
    if (!endereco) {
      return new Error("Cliente não cadastrado!");
    }
    endereco.rua = rua ? rua : endereco.rua;
    endereco.cidade = cidade ? cidade : endereco.cidade;
    endereco.cep = cep ? cep : endereco.cep;

    await repository.save(endereco);
  }
}
