import { CreateProductRequest } from "../types/create-request.interface"

export default function createProductDTO(product: CreateProductRequest) {
  if (
    !product.name ||
    !product.price ||
    !product.description ||
    !product.category_id ||
    !product.amount
  ) {
    throw new Error("Invalid values to create new product.")
  }
}