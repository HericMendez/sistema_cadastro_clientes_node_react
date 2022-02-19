import { CreatePhoneService } from '../../services/telefones/CreatePhoneService';
import { Request as req, Response as res } from "express"


export class CreatePhoneController {
    async handle(request: req, response: res) {
        const {
            numero_telefone,
            clientId
        } = request.body;

        const service = new CreatePhoneService();
        const result = await service.execute({
            numero_telefone,
            clientId
        })

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}

/**

[
	{
		"id": "562946e3-058a-4293-b84d-b709c28339ad",
		"numero_telefone": "(16)99888-8888",
		"clientId": null,
		"client": null
	},
	{
		"id": "6e5873e5-80ed-45b9-8461-19858a8ff17e",
		"numero_telefone": "(16)3394-3047",
		"clientId": null,
		"client": null
	},
	{
		"id": "9438eb76-3f6c-4293-aa06-2d0d0e675462",
		"numero_telefone": "(16)3394-3047",
		"clientId": null,
		"client": null
	},
	{
		"id": "d7d5a632-7f7c-429d-97e5-60cf51fb0db7",
		"numero_telefone": "(16)3394-3047",
		"clientId": null,
		"client": null
	},
	{
		"id": "02ab4ca7-cc05-47ce-b2de-f9bf00071a37",
		"numero_telefone": "(16)3394-3047",
		"clientId": null,
		"client": null
	},
	{
		"id": "001d1133-d3d1-4477-9b79-4de3dc008542",
		"numero_telefone": "(16)3394-3047",
		"clientId": null,
		"client": null
	},
	{
		"id": "7150cb15-623d-41c4-8c27-8886249b6fe0",
		"numero_telefone": "(16)3394-3047",
		"clientId": null,
		"client": null
	},
	{
		"id": "3be16e0b-7f54-4a81-8615-91b7525a23b4",
		"numero_telefone": "(16)3394-3047",
		"clientId": null,
		"client": null
	}
]



*/