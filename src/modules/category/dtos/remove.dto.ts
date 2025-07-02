import { RemoveCategoryRequest } from "../types/remove-request.interface"

export default function removeCategoryDTO(category: RemoveCategoryRequest) {
  if (
    !category.category_id ||
    category.category_id === ''
  ) {
    throw new Error("Invalid arguments to remove category.")
  }
}