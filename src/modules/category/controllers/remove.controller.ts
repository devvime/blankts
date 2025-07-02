import { Request, Response } from "express";
import RemoveCategoryService from "../services/remove.service";
import removeCategoryDTO from "../dtos/remove.dto";

class RemoveCategoryController {

  async handle(request: Request, response: Response) {
    removeCategoryDTO({ category_id: request.params.id });
    const result = await RemoveCategoryService.execute({ category_id: request.params.id });
    response.json({
      message: "Category deleted successfully!",
      data: result
    });
  }

}

export default new RemoveCategoryController();
