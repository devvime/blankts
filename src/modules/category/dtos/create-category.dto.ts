import { CategoryRequest } from "../interfaces/category-request.interface"

export default function createCategoryDTO(category: CategoryRequest) {
  if (!category.name) {
    throw new Error("Invalid name.")
  }
}