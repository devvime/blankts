import prismaClient from "../../../common/prisma";
import { RemoveUserRequest } from "../types/remove-request.interface";

class RemoveUserService {
  async execute({ user_id }: RemoveUserRequest) {

    if (user_id) {
      const exists = await prismaClient.user.findFirst({
        where: {
          id: user_id
        }
      });
      if (!exists) {
        throw new Error("User is not found");
      }
      const removeUser = await prismaClient.user.delete({
        where: {
          id: user_id
        }
      });
      return removeUser;
    }
  }
}

export default new RemoveUserService();