import prismaClient from "../../../common/prisma";
import createCategoryDTO from "../dtos/create-category.dto";
import { CategoryRequest } from "../interfaces/category-request.interface";

class CreateCategoryService {
  async execute(category: CategoryRequest) {
    createCategoryDTO(category);
    const result = await prismaClient.category.create({
      data: {
        name: category.name
      },
      select: {
        id: true,
        name: true
      }
    });
    return result;
  }
}

export default new CreateCategoryService();