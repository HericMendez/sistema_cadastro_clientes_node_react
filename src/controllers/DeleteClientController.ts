import { DeleteClientService } from './../services/DeleteClientService';
import { Request as req, Response as res } from "express";

export class DeleteClientController {
    async handle(request: req, response: res){
        const {id} = request.params;
        const service = new DeleteClientService();
        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}