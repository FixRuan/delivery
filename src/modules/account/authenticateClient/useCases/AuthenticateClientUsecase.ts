import {prisma} from "../../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface AuthenticateClientUseCaseDTO {
  username: string;
  password: string;
};

export class AuthenticateClientUseCase {
  async execute({username, password}:AuthenticateClientUseCaseDTO){

    const client = await prisma.clients.findFirst({
      where: {username}
    });

    if(!client){
      throw new Error("Username or password invalid!");
    };
    
    const passwordMatch = await compare(password, client.password);

    if(!passwordMatch){
      throw new Error("Username or password invalid!");
    };

    const token = sign({username}, "21232f297a57a5a743894a0e4a801fc3" , {
      subject: client.id,
      expiresIn: "1d"
    });
      
    return token;
  }
}
