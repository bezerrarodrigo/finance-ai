"use server";

import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { transactionSchema } from "./schema";

export const addTransaction = async (
  params: Omit<Prisma.TransactionCreateInput, "userId">,
) => {
  transactionSchema.parse(params);

  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  await prisma.transaction.create({ data: { ...params, userId } });
};
