import prismaClient from "../../../common/prisma";
import { UpdateProductRequest } from "../types/update-request.interface";

class EditProductService {

  async execute(id, product: UpdateProductRequest) {
    const productExists = await prismaClient.product.findFirst({
      where: {
        id
      }
    });
    if (!productExists) {
      throw new Error("Product is not found.");
    }
    const result = await prismaClient.product.update({
      where: {
        id
      },
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        amound: Number(product.amount),
        banner: product.banner,
        categoryId: product.categoryId
      }
    });
    return result;
  }

}

export default new EditProductService();