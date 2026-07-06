"use client";

import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { useState } from "react";
import { UpsertTransactionDialog } from "./upsert-transaction-dialog";
import { TransactionRow } from "./columns";

interface EditTransactionButtonProps {
  transaction: TransactionRow;
}

const EditTransactionButton = ({ transaction }: EditTransactionButtonProps) => {
  //state
  const [dialogIsOpen, setDialogIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setDialogIsDialogOpen(true)}
      >
        <Edit className="text-muted-foreground h-4 w-4" />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsDialogOpen}
        transactionId={transaction.id}
        defaultValues={{
          ...transaction,
          amount: transaction.amount.toString(),
          date: new Date(transaction.date),
        }}
      />
    </>
  );
};

export default EditTransactionButton;
