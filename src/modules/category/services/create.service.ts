import prismaClient from "../../../common/prisma";
import createCategoryDTO from "../dtos/create.dto";
import { CreateCategoryRequest } from "../types/create-request.interface";

class CreateCategoryService {
  async execute(category: CreateCategoryRequest) {
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