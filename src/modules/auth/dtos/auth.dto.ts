import { AuthRequest } from "../types/auth-request.interface";

export default function authUserDTO(user: AuthRequest) {
  if (!user.email) {
    throw new Error("Email is required!")
  }
  if (!user.password) {
    throw new Error("Password is required!")
  }
}