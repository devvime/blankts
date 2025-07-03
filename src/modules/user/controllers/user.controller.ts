import { Request, Response } from "express";
import DetailUserService from "../services/list-by-id.service";
import { CreateUserRequest } from "../types/create-request.interface";
import CreateUserService from "../services/create.service";
import UpdateUserService from "../services/update.service";
import RemoveUserService from "../services/destroy.service";
import ListUserService from "../services/list.service";
import Controller from "@shared/types/controller.interface";

class UserController implements Controller {

  async index(request: Request, response: Response) {
    const users = await ListUserService.execute();
    response.json(users);
  }

  async show(request: Request, response: Response) {
    let user_id = request?.user_id as string;
    if (request.params.id) {
      user_id = request.params.id as string;
    }
    const result = await DetailUserService.execute(user_id);
    response.json(result);
  }

  async store(request: Request, response: Response) {
    const user: CreateUserRequest = request.body;
    const result = await CreateUserService.execute(user);
    response.json(result);
  }

  async update(request: Request, response: Response) {
    const user: CreateUserRequest = request.body;
    const id = request.params.id;
    const result = await UpdateUserService.execute(id, user);
    response.json(result);
  }

  async destroy(request: Request, response: Response) {
    const user_id = request.params.id as string;
    const result = await RemoveUserService.execute({ user_id });
    response.json(result);
  }

}

export default new UserController();