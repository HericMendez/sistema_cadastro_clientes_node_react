import { getRepository } from 'typeorm';
import { Client } from './../entities/Client';


type ClientRequest = {
    nome: string;
    cpf: string;

};

export class CreateClientService {
    async execute({nome, cpf}:ClientRequest): Promise<Client | Error>{
        const repo = getRepository(Client);
        if(await repo.findOne({nome}) || await repo.findOne({cpf})){
            return new Error("Cliente já cadastrado!")
        }

        const client = repo.create({nome, cpf});
        await repo.save(client); 

        return client;
    }

}