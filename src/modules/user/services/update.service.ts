import prismaClient from "@common/prisma";
import { hash } from "bcryptjs";
import { CreateUserRequest } from "../types/create-request.interface";

class UpdateUserService {

  async execute(id: string, user: CreateUserRequest) {
    try {
      const userAlreadyExists = await prismaClient.user.findFirst({
        where: {
          email: user.email
        }
      });

      if (!userAlreadyExists) {
        throw new Error("User is not found.");
      }

      const passwordHash = await hash(user.password, 8);
      const result = await prismaClient.user.update({
        where: {
          id
        },
        data: {
          name: user.name,
          email: user.email,
          password: passwordHash
        },
        select: {
          id: true,
          name: true,
          email: true
        }
      });

      return result;

    } catch (error) {
      throw new Error(error);
    }
  }

}

export default new UpdateUserService();