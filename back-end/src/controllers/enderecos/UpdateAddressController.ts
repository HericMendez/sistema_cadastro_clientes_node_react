import { UpdateAdressService } from '../../services/enderecos/UpdateAddressService';
import { Request as req, Response as res } from "express";

export class UpdateAddressController {
    async handle(request: req, response: res) {
        const {id}= request.params;  
        const {rua, cidade, cep, principal, estado}=request.body;

        const service = new UpdateAdressService();
        const result = await service.execute({id, rua, cidade, cep, principal, estado});

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result);

    }
} 