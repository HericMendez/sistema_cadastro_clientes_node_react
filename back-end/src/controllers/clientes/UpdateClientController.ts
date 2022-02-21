import { UpdateClientService } from '../../services/clientes/UpdateClientService';
import { Request as req, Response as res } from "express";

export class UpdateClientController {
    async handle(request: req, response: res) {
        const {id}= request.params;  
        const {nome, cpf}=request.body;

        const service = new UpdateClientService();
        const result = await service.execute({id, nome, cpf});

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result);

    }
} 