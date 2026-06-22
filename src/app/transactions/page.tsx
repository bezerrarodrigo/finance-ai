import { DataTable } from "@/components/data-table";
import { prisma } from "@/lib/prisma";
import AddTransactionButton from "./components/add-transaction-button";
import { TransactionRow, transactionsColumns } from "./components/columns";

const TransactionsPage = async () => {
  const transactions = await prisma.transaction.findMany({});

  // Serialize the transactions to ensure string format to pass to the client components
  const serializedTransactions: TransactionRow[] = transactions.map(
    (transaction) => ({
      id: transaction.id,
      name: transaction.name,
      type: transaction.type,
      amount: Number(transaction.amount),
      category: transaction.category,
      paymentMethod: transaction.paymentMethod,
      date: transaction.date.toISOString(),
      createdAt: transaction.createdAt.toISOString(),
      updatedAt: transaction.updatedAt.toISOString(),
      userId: transaction.userId,
    }),
  );

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionsColumns} data={serializedTransactions} />
    </div>
  );
};

export default TransactionsPage;
