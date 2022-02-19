import { GetAllAdressesController } from './controllers/GetAllAdressesController';
import { CreateAddressController } from './controllers/CreateAddressController';
import { UpdateClientController } from "./controllers/UpdateClientController";
import { DeleteClientController } from "./controllers/DeleteClientController";

import { CreateClientController } from "./controllers/CreateClientController";
import { GetClientListController } from "./controllers/GetClientListController";
import { Router } from "express";

const routes = Router();

routes.post("/client", new CreateClientController().handle);
routes.get("/client", new GetClientListController().handle);
routes.delete("/client/:id", new DeleteClientController().handle);
routes.put("/client/:id", new UpdateClientController().handle);

routes.post("/lista", new CreateAddressController().handle);
routes.get("/lista", new GetAllAdressesController().handle);

export { routes };
