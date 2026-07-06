"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import { UpsertTransactionDialog } from "./upsert-transaction-dialog";

const AddTransactionButton = () => {
  //state
  const [dialogIsOpen, setDialogIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold text-white"
        onClick={() => setDialogIsDialogOpen(true)}
      >
        Adicionar Transação
        <ArrowUpDown />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsDialogOpen}
      />
    </>
  );
};

export default AddTransactionButton;
