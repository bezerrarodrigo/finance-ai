import { TransactionType } from "@/generated/prisma/browser";

export const TRANSACTION_CATEGORY_LABELS = {
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

export const PAYMENT_METHOD_LABELS = {
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  PIX: "Pix",
  OTHER: "Outros",
};

export const TRANSACTION_TYPE_OPTIONS = [
  { value: TransactionType.EXPENSE, label: "Despesa" },
  { value: TransactionType.DEPOSIT, label: "Depósito" },
  { value: TransactionType.INVESTMENT, label: "Investimento" },
];

export const PAYMENT_METHOD_OPTIONS = [
  { value: "CASH", label: "Dinheiro" },
  { value: "CREDIT_CARD", label: "Cartão de Crédito" },
  { value: "DEBIT_CARD", label: "Cartão de Débito" },
  { value: "BANK_TRANSFER", label: "Transferência Bancária" },
  { value: "PIX", label: "Pix" },
  { value: "OTHER", label: "Outros" },
];

export const CATEGORY_OPTIONS = [
  { value: "EDUCATION", label: "Educação" },
  { value: "FOOD", label: "Alimentação" },
  { value: "HEALTH", label: "Saúde" },
  { value: "HOUSING", label: "Moradia" },
  { value: "TRANSPORTATION", label: "Transporte" },
  { value: "ENTERTAINMENT", label: "Entretenimento" },
  { value: "OTHER", label: "Outros" },
  { value: "SALARY", label: "Salário" },
  { value: "UTILITY", label: "Utilidades" },
];
