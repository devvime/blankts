import { Request, Response } from "express";
import CreateProductService from "../services/create.service";
import { CreateProductRequest } from "../types/create-request.interface";

class CreateProductController {

  async handle(request: Request, response: Response) {
    const product: CreateProductRequest = request.body;

    if (!request.file) {
      throw new Error("Error sending image.")
    }

    const { originalname, filename: banner } = request.file;

    const result = await CreateProductService.execute({
      name: product.name,
      description: product.description,
      price: product.price,
      banner,
      category_id: product.category_id,
      amount: product.amount
    });

    response.json(result);
  }

}

export default new CreateProductController();