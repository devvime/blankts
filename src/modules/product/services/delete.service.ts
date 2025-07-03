import prismaClient from "../../../common/prisma";

class DeleteProductService {

  async execute(id: string) {
    const existData = await prismaClient.product.findFirst({
      where: {
        id
      }
    });
    if (!existData) {
      throw new Error("Product is not found.");
    }
    const result = await prismaClient.product.delete({
      where: {
        id
      }
    });
    return result;
  }

}

export default new DeleteProductService();