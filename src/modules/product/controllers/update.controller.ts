import { Request, Response } from "express";
import { UpdateProductRequest } from "../types/update-request.interface";
import EditProductService from "../services/update.service";

class EditProductController {

  async handle(request: Request, response: Response) {
    const product: UpdateProductRequest = request.body;
    if (request.file) {
      const { originalname, filename: banner } = request.file;
      product.banner = banner;
    }
    const result = await EditProductService.execute(request.params.id, product);
    response.json(result);
  }

}

export default new EditProductController();