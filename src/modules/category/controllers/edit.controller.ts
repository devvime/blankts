import { Request, Response } from "express";
import { EditCategoryRequest } from "../types/edit-request.interface";
import EditCategoryService from "../services/edit.service";

class EditCategoryController {

  async handle(request: Request, response: Response) {
    const category: EditCategoryRequest = request.body;
    category.category_id = request.params.id;
    const result = await EditCategoryService.execute(category);
    response.json(result);
  }

}

export default new EditCategoryController();
