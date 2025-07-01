import prismaClient from "../../../common/prisma";
import { RemoveUserRequest } from "../interfaces/remove-user-request.interface";

class RemoveUserService {
  async execute({ user_id }: RemoveUserRequest) {

    if (user_id) {
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