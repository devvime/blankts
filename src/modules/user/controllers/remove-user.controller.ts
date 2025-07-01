import { Request, Response } from "express";
import RemoveUserService from "../services/remove-user.service";

class RemoveUserController {

  async handle(request: Request, response: Response) {
    const user_id = request.params.id as string;
    const result = await RemoveUserService.execute({ user_id });
    response.json(result);
  }

}

export default new RemoveUserController();