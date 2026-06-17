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

const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  TRANSPORTATION: "Transporte",
  ENTERTAINMENT: "Entretenimento",
  OTHER: "Outros",
  SALARY: "Salário",
  UTILITY: "Utilidades",
};

const PAYMENT_METHOD_LABELS = {
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  MOBILE_PAYMENT: "Pagamento Móvel",
  OTHER: "Outros",
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
