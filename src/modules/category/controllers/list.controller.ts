import { Request, Response } from "express";
import ListCategoriesService from "../services/list.service";

class ListCategoryController {

  async handle(request: Request, response: Response) {
    const result = await ListCategoriesService.execute();
    response.json(result);
  }

}

export default new ListCategoryController();
