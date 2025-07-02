import { CreateCategoryRequest } from "../types/create-request.interface"

export default function createCategoryDTO(category: CreateCategoryRequest) {
  if (!category.name) {
    throw new Error("Invalid name.")
  }
}