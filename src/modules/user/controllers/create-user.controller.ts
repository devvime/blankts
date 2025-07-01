import { Request, Response } from "express";
import CreateUserService from "../services/create-user.service";
import { UserRequest } from "../interfaces/user-request.interface";

class CreateUserController {

  async handle(request: Request, response: Response) {
    const user: UserRequest = request.body;
    const result = await CreateUserService.execute(user);
    response.json(result);
  }

}

export default new CreateUserController();