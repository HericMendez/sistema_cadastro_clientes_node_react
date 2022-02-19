import { CreatePhoneService } from '../../services/telefones/CreatePhoneService';
import { Request as req, Response as res } from "express"


export class CreatePhoneController {
    async handle(request: req, response: res) {
        const {
            numero_telefone,
            client_id
        } = request.body;

        const service = new CreatePhoneService();
        const result = await service.execute({
            numero_telefone,
            client_id
        })

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}