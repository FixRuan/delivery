import { Router } from "express";
import {AuthenticateClientController} from "./modules/account/authenticateClient/useCases/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const routes = Router();

routes.post("/client/", createClientController.handle);
routes.post("/authenticate", authenticateClientController.handle);


export {routes};
