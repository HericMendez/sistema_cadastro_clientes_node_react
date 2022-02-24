import { Client } from "../../entities/Client";
import { Endereco } from "../../entities/Endereco";
import { getRepository, QueryRunner } from "typeorm";


type EnderecoRequest = {
  id: string;
  rua: string;
  cidade: string;

  clientId: string;
  principal: boolean;
  estado: string;
};

export class CreateAddressService {
  async execute({id,  rua, cidade, clientId, principal, estado }: EnderecoRequest) {
    const repository = getRepository(Endereco);
    const repoClient = getRepository(Client);

    if (!(await repoClient.findOne(clientId))) {
      return new Error("Cliente não cadastrado!");
    }

    const endereco = repository.create({
      id,
      rua,
      cidade,

      clientId,
      principal,
      estado
    });
    
    console.log(endereco.id)
  
    if(principal){

      getRepository(Endereco).createQueryBuilder()
      .update()
      .set({ principal: false })
      .where(`id != '${endereco.id}'`)
      .execute();
    }
    
    

    await repository.save(endereco);
    return endereco;
  }
}
