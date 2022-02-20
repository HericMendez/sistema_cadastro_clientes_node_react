import { Telefone } from '../../entities/Telefone';

import { getRepository } from 'typeorm';


export class GetAllPhonesService {
    async execute(){
        const repository = getRepository(Telefone);
        const telefone = await repository.find({relations: ["client"]});

        return telefone;

    }
}
