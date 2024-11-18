import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/sumary-cards";
import TimeSelct from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import { getDashboard } from "../_data/get-dashboard";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({searchParams: {month}}: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect("?month=01");
  }

  const dashboard = await getDashboard(month)
  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold"> Dashboard </h1>
          <TimeSelct />
        </div>
        <SummaryCards investmentsTotal={0} month={month} {...dashboard} />
        <div className="grid grid-cols-3 grid-row-1 gap-6"> 
          <TransactionsPieChart typePercentage={undefined} investmentsTotal={0} {...dashboard}/>
        </div>
      </div>
    </>

  );
};

export default Home;