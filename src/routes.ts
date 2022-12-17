import { Router } from "express";

import {AuthenticateClientController} from "./modules/account/authenticateClient/useCases/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import {CreateDeliverymanController} from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();

const routes = Router();

routes.post("/client", createClientController.handle);
routes.post("/authenticate", authenticateClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);

export {routes};

