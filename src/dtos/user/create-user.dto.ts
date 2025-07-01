import { UserRequest } from "../../models/interfaces/user/UserRequest";

export default function createUserDTO(user: UserRequest) {
  if (!user.email) {
    throw new Error("Email incorrect")
  }
}