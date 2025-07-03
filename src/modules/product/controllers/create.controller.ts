import { Request, Response } from "express";
import CreateProductService from "../services/create.service";
import { CreateProductRequest } from "../types/create-request.interface";
import createProductDTO from "../dtos/create.dto";

class CreateProductController {

  async handle(request: Request, response: Response) {
    const product: CreateProductRequest = request.body;
    createProductDTO(product, request.file);

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