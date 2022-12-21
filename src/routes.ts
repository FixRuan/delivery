import { Router } from "express";

import {CreateDeliveryController} from "./modules/deliveries/useCases/CreateDeliveryController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import {AuthenticateClientController} from "./modules/account/authenticateClient/useCases/AuthenticateClientController";
import {CreateDeliverymanController} from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import {AuthenticateDeliverymanController} from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import {ensureAuthenticateClient} from "./middlewares/ensureAuthenticateClient";
import {FindAllWithoutEndDateController} from "./modules/deliveries/useCases/FindAllWithoutEndDateController";
import {ensureAuthenticateDeliveryman} from "./middlewares/ensureAuthenticateDeliveryman";

const createClientController = new CreateClientController();
const createDeliveryController = new CreateDeliveryController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const findAllWithoutEndDateController = new FindAllWithoutEndDateController();

const routes = Router();

routes.post("/client", createClientController.handle);
routes.post("/delivery",ensureAuthenticateClient,createDeliveryController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);
routes.get("/delivery/available", ensureAuthenticateDeliveryman,findAllWithoutEndDateController.handle);

export {routes};

