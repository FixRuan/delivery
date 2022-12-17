import { Router } from "express";

import {CreateDeliveryController} from "./modules/deliveries/useCases/CreateDeliveryController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import {AuthenticateClientController} from "./modules/account/authenticateClient/useCases/AuthenticateClientController";
import {CreateDeliverymanController} from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import {AuthenticateDeliverymanController} from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";

const createClientController = new CreateClientController();
const createDeliveryController = new CreateDeliveryController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const routes = Router();

routes.post("/client", createClientController.handle);
routes.post("/delivery", createDeliveryController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

export {routes};

