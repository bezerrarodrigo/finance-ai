"use client";

import {
  PAYMENT_METHOD_LABELS,
  TRANSACTION_CATEGORY_LABELS,
} from "@/app/constants/transactions";
import { Button } from "@/components/ui/button";
import {
  CategoryType,
  PaymentMethodType,
  TransactionType,
} from "@/generated/prisma/browser";
import { ColumnDef } from "@tanstack/react-table";
import { Trash2Icon } from "lucide-react";
import EditTransactionButton from "./edit-transaction-button";
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
    cell: ({ row }) => {
      return TRANSACTION_CATEGORY_LABELS[row.original.category];
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row }) => {
      return PAYMENT_METHOD_LABELS[row.original.paymentMethod];
    },
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row }) => {
      const date = new Date(row.original.date);
      return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    },
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row }) => {
      return row.original.amount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: transaction } }) => {
      return (
        <div className="flex">
          <EditTransactionButton transaction={transaction} />
          <Button variant="ghost" size="icon">
            <Trash2Icon className="text-muted-foreground h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
];
