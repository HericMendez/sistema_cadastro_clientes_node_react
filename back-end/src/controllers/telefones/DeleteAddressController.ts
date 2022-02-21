import { DeletePhoneService } from './../../services/telefones/DeletePhoneService';
import { Request as req, Response as res } from "express";

export class DeletePhoneController {
    async handle(request: req, response: res){
        const {id} = request.params;
        const service = new DeletePhoneService();
        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}