"use server";

import {
  CategoryType,
  PaymentMethodType,
  Prisma,
  TransactionType,
} from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { transactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: CategoryType;
  paymentMethod: PaymentMethodType;
  date: Date;
}

export const upsertTransaction = async (params: UpsertTransactionParams) => {
  transactionSchema.parse(params);

  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (params.id) {
    await prisma.transaction.upsert({
      where: {
        id: params.id,
      },
      update: {
        ...params,
        userId,
      },
      create: {
        ...params,
        userId,
      },
    });
  } else {
    await prisma.transaction.create({
      data: {
        ...params,
        userId,
      },
    });
  }
  revalidatePath("/transactions");
};
