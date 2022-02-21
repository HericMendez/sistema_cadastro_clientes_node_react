import { Telefone } from "./../../entities/Telefone";
import { getRepository } from "typeorm";

type PhoneUpdateRequest = {
  id: string;
  numero_telefone: string;
};

export class UpdatePhoneService {
  async execute({ id, numero_telefone }: PhoneUpdateRequest) {
    const repository = getRepository(Telefone);

    const telefone = await repository.findOne(id);
    if (!telefone) {
      return new Error("Número de telefone não existe!");
    }

    telefone.numero_telefone = numero_telefone
      ? numero_telefone
      : telefone.numero_telefone;

    await repository.save(telefone);
  }
}
