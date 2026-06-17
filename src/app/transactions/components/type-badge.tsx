import { Badge } from "@/components/ui/badge";
import { TransactionType } from "@/generated/prisma/browser";
import { Circle } from "lucide-react";

interface TransactionTypeBadgeProps {
  row: {
    original: {
      type: TransactionType;
    };
  };
}

export const TransactionTypeBadge = ({ row }: TransactionTypeBadgeProps) => {
  if (row.original.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="text-primary bg-green-500/10">
        <Circle className="fill-primary h-3 w-3" />
        <span className="font-bold">Depósito</span>
      </Badge>
    );
  }
  if (row.original.type === TransactionType.EXPENSE) {
    return (
      <Badge className="text-destructive bg-red-500/10">
        <Circle className="fill-destructive h-3 w-3" />
        <span className="font-bold">Despesa</span>
      </Badge>
    );
  }
  return (
    <Badge className="bg-muted text-success">
      <Circle className="h-3 w-3 fill-white" />
      <span className="font-bold">Investimento</span>
    </Badge>
  );
};
