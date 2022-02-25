import { Endereco } from "./../../entities/Endereco";
import { getRepository } from "typeorm";

export class DeleteAddressService {
  async execute(id: string) {
    const repository = getRepository(Endereco);

    if (!(await repository.findOne(id))) {
      return new Error("Endereço não existe!");
    }

    await repository.delete(id);
  }
}
