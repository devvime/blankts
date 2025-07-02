import { Request, Response } from "express";
import DetailUserService from "../services/detail.service";

class DetailUserController {

  async handle(request: Request, response: Response) {
    const user_id = request?.user_id;
    const result = await DetailUserService.execute(user_id);
    response.json(result);
  }

}

export default new DetailUserController();