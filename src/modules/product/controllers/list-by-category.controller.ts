import { Request, Response } from "express";
import ListProductByCategoryService from "../services/list-by-category.service";

class ListProductByCategoryController {

  async handle(request: Request, response: Response) {
    const category_id = request.query.category_id as string;
    const result = await ListProductByCategoryService.execute({ category_id });
    response.json(result);
  }

}

export default new ListProductByCategoryController();