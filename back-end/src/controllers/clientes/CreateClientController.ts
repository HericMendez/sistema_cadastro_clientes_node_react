import { CreateClientService } from '../../services/clientes/CreateClientService';
import { Request as req, Response as res } from "express"


export class CreateClientController{
    async handle(request: req, response: res){
        const { nome, cpf} = request.body;
        const service = new CreateClientService();
        const result = await service.execute({nome, cpf});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        console.log(result)

        return response.json(result);

    }
}