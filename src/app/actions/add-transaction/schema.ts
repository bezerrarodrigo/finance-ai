import {
  CategoryType,
  PaymentMethodType,
  TransactionType,
} from "@/generated/prisma/client";
import z from "zod/v3";

export const transactionSchema = z.object({
  name: z.string().trim().min(1),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(CategoryType),
  paymentMethod: z.nativeEnum(PaymentMethodType),
  date: z.date(),
});
