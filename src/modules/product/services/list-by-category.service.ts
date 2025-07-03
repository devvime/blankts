import prismaClient from "../../../common/prisma";
import { ListProductByCategoryIdRequest } from "../types/list-by-category.interface";

class ListProductByCategoryService {

  async execute({ category_id }: ListProductByCategoryIdRequest) {
    const result = await prismaClient.product.findMany({
      where: {
        categoryId: category_id
      }
    });
    return result;
  }

}

export default new ListProductByCategoryService();