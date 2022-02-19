import { GetAllPhonesController } from './controllers/telefones/GetAllPhonesController';
import { CreatePhoneController } from './controllers/telefones/CreatePhoneController';
import { GetAllAdressesController } from './controllers/enderecos/GetAllAdressesController';
import { CreateAddressController } from './controllers/enderecos/CreateAddressController';
import { UpdateClientController } from "./controllers/clientes/UpdateClientController";
import { DeleteClientController } from "./controllers/clientes/DeleteClientController";

import { CreateClientController } from "./controllers/clientes/CreateClientController";
import { GetClientListController } from "./controllers/clientes/GetClientListController";
import { Router } from "express";

const routes = Router();

routes.post("/client", new CreateClientController().handle);
routes.get("/client", new GetClientListController().handle);
routes.delete("/client/:id", new DeleteClientController().handle);
routes.put("/client/:id", new UpdateClientController().handle);

routes.post("/enderecos", new CreateAddressController().handle);
routes.get("/enderecos", new GetAllAdressesController().handle);

routes.post("/telefones", new CreatePhoneController().handle);
routes.get("/telefones", new GetAllPhonesController().handle);

export { routes };
