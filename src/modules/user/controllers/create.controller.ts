import { Request, Response } from "express";
import CreateUserService from "../services/create.service";
import { CreateUserRequest } from "../types/create-request.interface";

class CreateUserController {

  async handle(request: Request, response: Response) {
    const user: CreateUserRequest = request.body;
    const result = await CreateUserService.execute(user);
    response.json(result);
  }

}

export default new CreateUserController();