import type { Prisma } from "../generated/prisma/client";
import { prisma } from "../utils/prisma";

export const userService = {
  async create(body: Prisma.UserCreateInput) {
    return await prisma.user.create({
      data: body,
    });
  },
  async search(keyword: string) {
    return await prisma.user.findMany({
      where: {
        username: {
          contains: keyword,
        },
      },
    });
  },
  async update(data: Prisma.UserUpdateInput, id: number) {
    return await prisma.user.update({
      where: { id },
      data: data,
    });
  },
  async delete(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  },
};
