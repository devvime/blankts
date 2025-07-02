import { CreateUserRequest } from "../types/create-request.interface";

export default function createUserDTO(user: CreateUserRequest) {
  if (!user.email) {
    throw new Error("Email incorrect")
  }
}