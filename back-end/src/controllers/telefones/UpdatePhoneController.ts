import { UpdatePhoneService } from './../../services/telefones/UpdatePhoneService';
import { Request as req, Response as res } from "express";

export class UpdatePhoneController {
    async handle(request: req, response: res) {
        const {id}= request.params;  
        const {numero_telefone}=request.body;

        const service = new UpdatePhoneService();
        const result = await service.execute({id, numero_telefone});

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result);

    }
} 