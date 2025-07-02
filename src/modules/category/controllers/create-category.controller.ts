import { Request, Response } from "express";
import { CategoryRequest } from "../interfaces/category-request.interface";
import CreateCategoryService from "../services/create-category.service";

class CreateCategoryController {

  async handle(request: Request, response: Response) {
    const category: CategoryRequest = request.body;
    const result = await CreateCategoryService.execute(category);
    response.json(result);
  }

}

export default new CreateCategoryController();
