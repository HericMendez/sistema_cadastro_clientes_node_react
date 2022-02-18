
import { Request as req, Response as res } from "express";
import { GetClientListService } from '../services/GetClientListService'

export class GetClientListController {
    async handle(request: req, response: res){
        const service = new GetClientListService();
        const clientList =  await service.execute();

        return response.json(clientList);
    }
}