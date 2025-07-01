import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../../common/prisma";
import { AuthRequest } from "../interfaces/auth/auth-request.interface";
import authUserDTO from "../dtos/auth-user.dto";

class AuthUserService {

  async execute(data: AuthRequest) {
    authUserDTO(data);

    const user = await prismaClient.user.findFirst({
      where: {
        email: data.email
      }
    });

    if (!user) {
      throw new Error("Wrong username or password.");
    }

    const passwordMatch = await compare(data.password, user?.password);

    if (!passwordMatch) {
      throw new Error("Wrong username or password.");
    }

    const token = sign({
      name: user.name,
      email: user.email
    }, process.env.JWT_SECRET as string, {
      subject: user.id,
      expiresIn: "30d"
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    }
  }

}

export default new AuthUserService();