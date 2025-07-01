import { Request, Response } from "express";
import CreateUserService from "../../services/user/create-user.service";
import { UserRequest } from "../../models/interfaces/user/user-request.interface";

class CreateUserController {

  async handle(request: Request, response: Response) {
    const user: UserRequest = request.body;
    const result = await CreateUserService.execute(user);
    response.json(result);
  }

}

export default new CreateUserController();