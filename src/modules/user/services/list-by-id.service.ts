import prismaClient from "@common/prisma";

class DetailUserService {

  async execute(user_id: string) {

    if (user_id) {
      const user = await prismaClient.user.findFirst({
        where: {
          id: user_id
        },
        select: {
          id: true,
          name: true,
          email: true,
          created_at: true,
          updated_at: true
        }
      });
      if (user) {
        return user;
      }
      throw new Error("User is not found.")
    }

  }

}

export default new DetailUserService();