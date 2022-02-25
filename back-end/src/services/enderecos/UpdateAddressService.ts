import { Endereco } from "../../entities/Endereco";
import { getRepository } from "typeorm";

type AddressUpdateRequest = {
  id: string;
  rua: string;
  cidade: string;

  principal: boolean;
  estado: string;
};

export class UpdateAdressService {
  async execute({ id, rua, cidade, principal, estado }: AddressUpdateRequest) {
    const repository = getRepository(Endereco);

    const endereco = await repository.findOne(id);
    if (!endereco) {
      return new Error("Cliente não cadastrado!");
    }

    endereco.rua = rua ? rua : endereco.rua;
    endereco.cidade = cidade ? cidade : endereco.cidade;

    endereco.estado = estado ? estado : endereco.estado;

    await repository.save(endereco);
  }
}
