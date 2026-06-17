/*
  Warnings:

  - The values [MOBILE_PAYMENT] on the enum `PaymentMethodType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PaymentMethodType_new" AS ENUM ('CASH', 'CREDIT_CARD', 'DEBIT_CARD', 'BANK_TRANSFER', 'PIX', 'OTHER');
ALTER TABLE "Transaction" ALTER COLUMN "paymentMethod" TYPE "PaymentMethodType_new" USING ("paymentMethod"::text::"PaymentMethodType_new");
ALTER TYPE "PaymentMethodType" RENAME TO "PaymentMethodType_old";
ALTER TYPE "PaymentMethodType_new" RENAME TO "PaymentMethodType";
DROP TYPE "public"."PaymentMethodType_old";
COMMIT;
