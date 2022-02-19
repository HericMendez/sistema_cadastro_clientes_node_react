import { GetAllPhonesService } from './../../services/telefones/GetAllPhonesService';
import { Request as req, Response as res } from "express";


export class GetAllPhonesController {
    async handle(request: req, response: res){
        response.header("Access-Control-Allow-Origin", "*")
        const service = new GetAllPhonesService;

        const telefone = await service.execute();
        return response.json(telefone);

    }
}