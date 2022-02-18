import { Request as req, Response as res } from "express";
import { Endereco } from "../entities/Endereco";
import { GetAllAdressesService } from "../services/GetAllAdressesService";

export class GetAllAdressesController {
    async handle(request: req, response: res){
        const service = new GetAllAdressesService();

        const endereco = await service.execute();
        return response.json(endereco);

    }
}