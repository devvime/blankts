import { UserRequest } from "../../models/interfaces/user/user-request.interface";

export default function createUserDTO(user: UserRequest) {
  if (!user.email) {
    throw new Error("Email incorrect")
  }
}