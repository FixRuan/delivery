import {compare} from "bcrypt";
import {sign} from "jsonwebtoken";
import {prisma} from "../../../database/prismaClient";

interface AuthenticateDeliverymanUseCaseDTO {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({username, password}:AuthenticateDeliverymanUseCaseDTO){

    const deliveryman = await prisma.deliveryman.findFirst({
      where: {username}
    });

    if(!deliveryman){
      throw new Error("Username or password invalid!");
    };
    
    const passwordMatch = await compare(password, deliveryman.password);

    if(!passwordMatch){
      throw new Error("Username or password invalid!");
    };

    const token = sign({username}, "22232f297a57a5a743894a0e4a801fc3" , {
      subject: deliveryman.id,
      expiresIn: "1d"
    });
      
    return token;
  }
}

