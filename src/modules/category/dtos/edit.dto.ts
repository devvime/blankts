import { EditCategoryRequest } from "../types/edit-request.interface"

export default function editCategoryDTO(category: EditCategoryRequest) {
  if (
    !category.category_id ||
    !category.name ||
    category.category_id === '' ||
    category.name === ''
  ) {
    throw new Error("Invalid arguments to edit category.")
  }
}