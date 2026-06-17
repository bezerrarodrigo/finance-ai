"use client";

import {
  CategoryType,
  PaymentMethodType,
  TransactionType,
} from "@/generated/prisma/browser";
import { ColumnDef } from "@tanstack/react-table";
import { TransactionTypeBadge } from "./type-badge";

export type TransactionRow = {
  id: string;
  name: string;
  type: TransactionType;
  amount: number;
  category: CategoryType;
  paymentMethod: PaymentMethodType;
  date: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
};

export const transactionsColumns: ColumnDef<TransactionRow>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row }) => <TransactionTypeBadge row={row} />,
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
