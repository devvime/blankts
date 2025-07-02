import prismaClient from "../../../common/prisma";
import { hash } from "bcryptjs";
import { CreateUserRequest } from "../types/create-request.interface";
import createUserDTO from "../dtos/create.dto";

class CreateUserService {

  async execute(user: CreateUserRequest) {
    createUserDTO(user);

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: user.email
      }
    });

    if (userAlreadyExists) {
      throw new Error("Email already exists.");
    }

    const passwordHash = await hash(user.password, 8);

    const result = await prismaClient.user.create({
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
  }

}

export default new CreateUserService();