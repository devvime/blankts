import { Request, Response } from "express";
import DeleteProductService from "../services/delete.service";

class DeleteProductController {

  async handle(request: Request, response: Response) {
    const productId = request.params.id as string;
    const result = await DeleteProductService.execute(productId);
    response.json(result);
  }

}

export default new DeleteProductController();
