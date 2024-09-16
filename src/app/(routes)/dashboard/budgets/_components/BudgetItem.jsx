import Link from "next/link";
import React from "react";

function BudgetItem({ budget }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };

  return (
    <Link href={"/dashboard/expenses/" + budget?.id}>
      <div
        className="p-5 border rounded-2xl
        hover:shadow-md cursor-pointer h-[170px]
        bg-white dark:bg-gray-800
        border-gray-200 dark:border-gray-600"
      >
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <h2
              className="text-2xl p-3 px-4
              bg-slate-100 dark:bg-slate-700 rounded-full"
            >
              {budget?.icon}
            </h2>
            <div>
              <h2 className="font-bold text-black dark:text-white">
                {budget.name}
              </h2>
              <h2 className="text-sm text-gray-500 dark:text-gray-400">
                {budget.totalItem} Item
              </h2>
            </div>
          </div>
          <h2 className="font-bold text-primary text-lg dark:text-primary-light">
            ${budget.amount}
          </h2>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs text-slate-400 dark:text-slate-500">
              ${budget.totalSpend ? budget.totalSpend : 0} Spend
            </h2>
            <h2 className="text-xs text-slate-400 dark:text-slate-500">
              ${budget.amount - budget.totalSpend} Remaining
            </h2>
          </div>
          <div
            className="w-full
              bg-slate-300 dark:bg-slate-600 h-2 rounded-full"
          >
            <div
              className="bg-primary dark:bg-primary-light h-2 rounded-full"
              style={{
                width: `${calculateProgressPerc()}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BudgetItem;
