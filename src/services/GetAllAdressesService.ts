import { Endereco } from './../entities/Endereco';
import { getRepository } from 'typeorm';


export class GetAllAdressesService {
    async execute(){
        const repository = getRepository(Endereco);
        const endereco = await repository.find(
                        {
                relations: ["client"],
            }
        );

        return endereco;

    }
}
