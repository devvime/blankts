import prismaClient from "../../../common/prisma";

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
      return user;
    }

  }

}

export default new DetailUserService();