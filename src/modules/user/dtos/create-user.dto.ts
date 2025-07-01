import { UserRequest } from "../interfaces/user-request.interface";

export default function createUserDTO(user: UserRequest) {
  if (!user.email) {
    throw new Error("Email incorrect")
  }
}