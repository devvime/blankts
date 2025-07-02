import prismaClient from "../../../common/prisma";
import removeCategoryDTO from "../dtos/remove.dto";
import { RemoveCategoryRequest } from "../types/remove-request.interface";

class RemoveCategoryService {

  async execute({ category_id }: RemoveCategoryRequest) {
    removeCategoryDTO({ category_id });

    if (category_id) {
      const result = await prismaClient.category.delete({
        where: {
          id: category_id
        }
      });

      return result;
    }
  }

}

export default new RemoveCategoryService();