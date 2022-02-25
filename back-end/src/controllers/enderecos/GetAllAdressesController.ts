import { Request as req, Response as res } from "express";
import { GetAllAdressesService } from "../../services/enderecos/GetAllAdressesService";

export class GetAllAdressesController {
  async handle(request: req, response: res) {
    response.header("Access-Control-Allow-Origin", "*");
    const service = new GetAllAdressesService();

    const endereco = await service.execute();
    return response.json(endereco);
  }
}
