import { Telefone } from './../../entities/Telefone';
import { getRepository } from 'typeorm';


export class DeletePhoneService {
    async execute(id: string){
        const repository = getRepository(Telefone);

        if(!(await repository.findOne(id))){
            return new Error("Número de telefone não existe!");
        }

        await repository.delete(id);

    }
}