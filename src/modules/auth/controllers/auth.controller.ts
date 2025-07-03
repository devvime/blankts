import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import { AuthRequest } from "../types/auth-request.interface";

class AuthController {

  async handle(request: Request, response: Response) {
    const user: AuthRequest = request.body;
    const result = await AuthService.execute(user);
    response.json(result);
  }

}

export default new AuthController();