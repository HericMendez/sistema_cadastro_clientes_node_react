import { CreateAddressService } from "../../services/enderecos/CreateAddressService";
import { Request as req, Response as res } from "express";

export class CreateAddressController {
  async handle(request: req, response: res) {
    const { id, rua, cidade, clientId, principal, estado } = request.body;
    console.log(request.body);
    const service = new CreateAddressService();
    const result = await service.execute({
      id,
      rua,
      cidade,
      clientId,
      principal,
      estado,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
