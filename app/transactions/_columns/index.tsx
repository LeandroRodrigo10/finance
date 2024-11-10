"use client"

import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { CircleIcon } from "lucide-react";


export const transactionColumns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "name",
        header: "Status",
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({ row: { original: transaction } }) => {
            if (transaction.type === TransactionType.DEPOSIT) {
                return (
                    <Badge className="bg-muted font-bold text-primary hover:bg-muted">
                        <CircleIcon className="mr-2 fill-primary" size={10} />
                        Depósito
                    </Badge>
                );
            }
            if (transaction.type === TransactionType.EXPENSE) {
                return (
                    <Badge className="hover:bg-muted font-bold text-danger bg-danger bg-opacity-10">
                        <CircleIcon
                            className="fill-danger mr-2" size={10}/>
                        Despesa
                    </Badge>
                );

            }
            return (
                <Badge className="hover:bg-muted font-bold text-white bg-white bg-opacity-10">
                    <CircleIcon
                        className="fill-white mr-2" size={10} />
                    Investimento
                </Badge>
            );
        }

    },
    {
        accessorKey: "category",
        header: "Categoria",
    },
    {
        accessorKey: "paymentMethod",
        header: "Valor",
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
        accessorKey: "amouth",
        header: "Valor",
    },
    {
        accessorKey: "actions",
        header: " ",
    },
]