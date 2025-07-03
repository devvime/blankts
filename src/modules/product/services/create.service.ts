import prismaClient from "../../../common/prisma";
import { CreateProductRequest } from "../types/create-request.interface";

class CreateProductService {

  async execute(product: CreateProductRequest) {
    const result = await prismaClient.product.create({
      data: {
        name: product.name,
        price: product.price,
        description: product.description,
        banner: product.banner,
        categoryId: product.category_id,
        amound: Number(product.amount)
      }
    });

    return result;
  }

}

export default new CreateProductService();