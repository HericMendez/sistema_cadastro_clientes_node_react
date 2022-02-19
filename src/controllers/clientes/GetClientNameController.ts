
import { Request as req, Response as res } from "express";
import { GetClientNameService } from '../../services/clientes/GetClientNameService'

export class GetClientNameController {
    async handle(request: req, response: res){
        const {nome} = request.params;
        const service = new GetClientNameService();
        const clientname =  await service.execute(nome);
        console.log(clientname)
        return response.json(clientname);
    }
}