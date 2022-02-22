import { DeletePhoneController } from "./controllers/telefones/DeleteAddressController";
import { UpdatePhoneController } from "./controllers/telefones/UpdatePhoneController";
import { DeleteAddressController } from "./controllers/enderecos/DeleteAddressController";
import { UpdateAddressController } from "./controllers/enderecos/UpdateAddressController";
import { GetAllPhonesController } from "./controllers/telefones/GetAllPhonesController";
import { CreatePhoneController } from "./controllers/telefones/CreatePhoneController";
import { GetAllAdressesController } from "./controllers/enderecos/GetAllAdressesController";
import { CreateAddressController } from "./controllers/enderecos/CreateAddressController";
import { UpdateClientController } from "./controllers/clientes/UpdateClientController";
import { DeleteClientController } from "./controllers/clientes/DeleteClientController";
import { CreateClientController } from "./controllers/clientes/CreateClientController";
import { GetClientListController } from "./controllers/clientes/GetClientListController";
import { Router } from "express";

const routes = Router();

//Rotas do cliente:
routes.post("/client", new CreateClientController().handle);
routes.get("/client", new GetClientListController().handle);
routes.patch("/client/:id", new UpdateClientController().handle);
routes.delete("/client/:id", new DeleteClientController().handle);

//Rota dos endereços do cliente:
routes.post("/enderecos", new CreateAddressController().handle);
routes.get("/enderecos", new GetAllAdressesController().handle);
routes.patch("/enderecos/:id", new UpdateAddressController().handle);
routes.delete("/enderecos/:id", new DeleteAddressController().handle);

//Rota dos telefones do cliente:
routes.post("/telefones", new CreatePhoneController().handle);
routes.get("/telefones", new GetAllPhonesController().handle);
routes.patch("/telefones/:id", new UpdatePhoneController().handle);
routes.delete("/telefones/:id", new DeletePhoneController().handle);

export { routes };

//URL base: localhost:3000/
