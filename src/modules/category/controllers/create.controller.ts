import { Request, Response } from "express";
import { CreateCategoryRequest } from "../types/create-request.interface";
import CreateCategoryService from "../services/create.service";

class CreateCategoryController {

  async handle(request: Request, response: Response) {
    const category: CreateCategoryRequest = request.body;
    const result = await CreateCategoryService.execute(category);
    response.json(result);
  }

}

export default new CreateCategoryController();
