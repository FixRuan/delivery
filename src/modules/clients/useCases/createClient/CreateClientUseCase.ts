import {prisma} from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface CreateClientUseCaseDTO{
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({username, password}: CreateClientUseCaseDTO){
      
    const clientAlreadyExists = await prisma.clients.findFirst({
      where: {username: {mode: "insensitive"}}
    });

    if(clientAlreadyExists){
      throw new Error("Client Already Exists");
    };

    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {username,password: hashPassword}
    });

    return client;
  }
}
