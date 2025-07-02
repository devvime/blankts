import prismaClient from "../../../common/prisma";
import editCategoryDTO from "../dtos/edit.dto";
import { EditCategoryRequest } from "../types/edit-request.interface";

class EditCategoryService {

  async execute(category: EditCategoryRequest) {
    editCategoryDTO(category);

    const result = await prismaClient.category.update({
      where: {
        id: category.category_id
      },
      data: {
        name: category.name
      }
    });

    return result;
  }

}

export default new EditCategoryService();