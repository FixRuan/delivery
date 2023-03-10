import { Router } from "express";

import {CreateDeliveryController} from "./modules/deliveries/useCases/CreateDeliveryController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import {AuthenticateClientController} from "./modules/account/authenticateClient/useCases/AuthenticateClientController";
import {CreateDeliverymanController} from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import {AuthenticateDeliverymanController} from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import {ensureAuthenticateClient} from "./middlewares/ensureAuthenticateClient";
import {FindAllWithoutEndDateController} from "./modules/deliveries/useCases/FindAllWithoutEndDateController";
import {ensureAuthenticateDeliveryman} from "./middlewares/ensureAuthenticateDeliveryman";
import {UpdateDeliveryController} from "./modules/deliveries/useCases/UpdateDeliveryController";
import {FindAllDeliveriesController} from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import {FindAllDeliveriesByDeliverymanController} from "./modules/deliveryman/useCases/findAllDeliveries/findAllDeliveriesByDeliverymanController";
import {UpdateEndDateController} from "./modules/deliveries/useCases/UpdateEndDateController";

const createClientController = new CreateClientController();
const createDeliveryController = new CreateDeliveryController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const findAllWithoutEndDateController = new FindAllWithoutEndDateController();
const updateDeliveryController = new UpdateDeliveryController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const findAllDeliveriesByDeliverymanController = new FindAllDeliveriesByDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

const routes = Router();

routes.post("/client", createClientController.handle);
routes.post("/delivery",ensureAuthenticateClient,createDeliveryController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);
routes.get("/delivery/available", ensureAuthenticateDeliveryman,findAllWithoutEndDateController.handle);
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman,updateDeliveryController.handle);
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle);
routes.get("/client/deliveries/",ensureAuthenticateClient,findAllDeliveriesController.handle);
routes.get("/deliveryman/deliveries/",ensureAuthenticateDeliveryman,findAllDeliveriesByDeliverymanController.handle);

export {routes};

