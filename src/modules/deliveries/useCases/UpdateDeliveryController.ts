import {Request, Response} from "express";
import {UpdateDeliveryUseCase} from "./UpdateDeliveryUseCase";

export class UpdateDeliveryController{
  async handle(req: Request, res: Response){
    
    const { id_deliveryman  } = req;
    const { id:id_delivery  } = req.params;

    const updateDeliveryUseCase = new UpdateDeliveryUseCase();

    const result = await updateDeliveryUseCase.execute({id_delivery,id_deliveryman})

    return res.json(result);
  }
}
