import { getRepository } from 'typeorm';
import { Client } from '../../entities/Client'

export class DeleteClientService {
    async execute(id: string){
        const repository = getRepository(Client);

        if(!(await repository.findOne(id))){
            return new Error("Cliente não existe!");
        }

        await repository.delete(id);

    }
}