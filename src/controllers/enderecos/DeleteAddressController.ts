import { DeleteAddressService } from './../../services/enderecos/DeleteAddressService';
import { Request as req, Response as res } from "express";

export class DeleteAddressController {
    async handle(request: req, response: res){
        const {id} = request.params;
        const service = new DeleteAddressService();
        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}