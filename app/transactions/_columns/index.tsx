"use client"


import { Transaction, TransactionType } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import TransactionTypeBadge from "./_components/type.badge";


export const transactionColumns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "name",
        header: "Status",
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({ row: { original: transaction } }) => (
            <TransactionTypeBadge transaction={transaction} />
        ),

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