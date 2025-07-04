import prismaClient from "@common/prisma";

class ListUserService {

  async execute() {
    try {
      const users = await prismaClient.user.findMany();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

}

export default new ListUserService();