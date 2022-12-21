import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";

interface PayloadDTO {
  sub: string;
}

export async function ensureAuthenticateDeliveryman(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    
    if(!authHeader){
      return res.status(401).json({
        message: "Token missing"
      });
    };

    const [, token] = authHeader.split(" ");

    try{
      const { sub } = verify(token,"22232f297a57a5a743894a0e4a801fc3") as PayloadDTO; 
      console.log(sub);
      req.id_deliveryman = sub;

      return next();
    }catch(err){
      return res.status(401).json({
        message: "Invalid Token"
      })
    }
}
