import {Request, Response} from "express";
import {FindAllDeliveriesByDeliverymanUseCase} from "./findAllDeliveriesByDeliverymanUseCase";


export class FindAllDeliveriesByDeliverymanController{
  async handle(req:Request, res: Response){
    const {id_deliveryman} = req;

    const findAllDeliveriesByDeliverymanUseCase = new FindAllDeliveriesByDeliverymanUseCase();
    const deliveries = await findAllDeliveriesByDeliverymanUseCase.execute(id_deliveryman);

    return res.json(deliveries);
  }
}
