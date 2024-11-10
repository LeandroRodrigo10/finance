import { ArrowDown, ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import {db} from "../_lib/prisma"

const TransactionsPage = async () => {
    const transaction = await db.transaction.findMany({})
    return (
        <div>
            <div className="flex w-full items-center justify-between p-6">
                <h1 className="text-2xl font-bold">Transações</h1>
                <Button className="rounded-full">
                    Adicionar Transação
                    <ArrowDownUpIcon />
                </Button>
            </div>
        </div>
    );
}; 

export default TransactionsPage;