"use client"

import { Transaction, TransactionType } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Badge, CircleIcon } from "lucide-react"

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
                return <Badge>Depósito</Badge>;
            }
            if (transaction.type === TransactionType.EXPENSE) {
                return "Despesa";
            }
            return "Investimento";
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