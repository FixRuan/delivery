import {prisma} from "../../../database/prismaClient";

interface CreateDeliveryUseCaseDTO{
  item_name: string;
  id_client: string;
}

export class CreateDeliveryUseCase{
  async execute({item_name, id_client}: CreateDeliveryUseCaseDTO){
    
    const delivery = await prisma.deliveries.create({
      data: {item_name, id_client}
    });

    
    return delivery;
  }
}
