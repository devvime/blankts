import { Request, Response } from "express";
import AuthUserService from "../../services/user/auth-user.service";
import { AuthRequest } from "../../models/interfaces/user/auth/auth-request.interface";

class AuthUserController {

  async handle(request: Request, response: Response) {
    const user: AuthRequest = request.body;
    const result = await AuthUserService.execute(user);
    response.json(result);
  }

}

export default new AuthUserController();