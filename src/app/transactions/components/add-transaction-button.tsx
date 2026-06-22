"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  CategoryType,
  PaymentMethodType,
  TransactionType,
} from "@/generated/prisma/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpDown } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod/v3";

//zod schema
const AddTransactionSchema = z.object({
  name: z.string().trim().min(1, "O nome é obrigatório."),
  amount: z.string().trim().min(1, "O valor é obrigatório."),
  tipo: z.nativeEnum(TransactionType),
  category: z.nativeEnum(CategoryType),
  pagamento: z.nativeEnum(PaymentMethodType),
  date: z.date({ required_error: "Campo obrigatório." }),
});

type formSchema = z.infer<typeof AddTransactionSchema>;

const AddTransactionButton = () => {
  const form = useForm<formSchema>({
    resolver: zodResolver(AddTransactionSchema),
    defaultValues: {
      name: "",
      amount: "",
      tipo: TransactionType.EXPENSE,
      category: CategoryType.OTHER,
      pagamento: PaymentMethodType.CASH,
      date: new Date(),
    },
  });

  //functions
  const onSubmit = (data: formSchema) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full font-bold text-white">
          Adicionar Transação
          <ArrowUpDown />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Adicionar Transação
          </DialogTitle>
          <DialogDescription>Insira as informações abaixo.</DialogDescription>
        </DialogHeader>
        <form className="mt-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Título</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Título"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTransactionButton;
