import React, { useEffect, useState } from "react";
import formatNumber from "../../../../../utils";
import getFinancialAdvice from "../../../../../utils/getFinancialAdvice";
import {
  PiggyBank,
  ReceiptText,
  Wallet,
  Sparkles,
  BadgeIndianRupee,
} from "lucide-react";

const CardInfo = ({ budgetList = [], incomeList = [] }) => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [financialAdvice, setFinancialAdvice] = useState("");

  useEffect(() => {
    if (budgetList.length > 0 || incomeList.length > 0) {
      CalculateCardInfo();
    }
  }, [budgetList, incomeList]);

  useEffect(() => {
    // Example for financial advice fetching (commented out for now)
    if (totalIncome > 0 || totalBudget > 0 || totalSpend > 0) {
      const fetchFinancialAdvice = async () => {
        const advice = await getFinancialAdvice(totalBudget, totalIncome, totalSpend);
        setFinancialAdvice(advice);
      };
      fetchFinancialAdvice();
    }
  }, [totalSpend, totalIncome, totalBudget]);

  const CalculateCardInfo = () => {
    let totalBudget_ = 0;
    let totalSpend_ = 0;
    let totalIncome_ = 0;

    budgetList.forEach((element) => {
      totalBudget_ += Number(element.amount);
      totalSpend_ += element.totalSpend || 0; // Handle cases where `totalSpend` might be undefined
    });

    incomeList.forEach((element) => {
      totalIncome_ += element.totalAmount || 0; // Handle cases where `totalAmount` might be undefined
    });

    setTotalIncome(totalIncome_);
    setTotalBudget(totalBudget_);
    setTotalSpend(totalSpend_);
  };

  return (
    <div className="p-5">
      {budgetList?.length > 0 ? (
        <div>
          <div className="p-7 border mt-4 rounded-2xl flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-md">
            <div>
              <div className="flex mb-2 flex-row space-x-1 items-center">
                <h2 className="text-md text-gray-900 dark:text-gray-100">
                  Finance Smart AI
                </h2>
                <Sparkles
                  className="rounded-full text-white w-10 h-10 p-2
                    bg-gradient-to-r
                    from-pink-500
                    via-red-500
                    to-yellow-500
                    background-animate"
                />
              </div>
              <h2 className="font-light text-md text-gray-700 dark:text-gray-300">
                {financialAdvice || "Loading financial advice..."}
              </h2>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-7 border rounded-2xl flex items-center justify-between bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-md">
              <div>
                <h2 className="text-sm text-gray-600 dark:text-gray-300">
                  Total Budget
                </h2>
                <h2 className="font-bold text-2xl text-gray-900 dark:text-gray-100">
                  ₹{formatNumber(totalBudget)}
                </h2>
              </div>
              <PiggyBank className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-md">
              <div>
                <h2 className="text-sm text-gray-600 dark:text-gray-300">
                  Total Spend
                </h2>
                <h2 className="font-bold text-2xl text-gray-900 dark:text-gray-100">
                  ₹{formatNumber(totalSpend)}
                </h2>
              </div>
              <ReceiptText className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-md">
              <div>
                <h2 className="text-sm text-gray-600 dark:text-gray-300">
                  No. Of Budget
                </h2>
                <h2 className="font-bold text-2xl text-gray-900 dark:text-gray-100">
                  {budgetList?.length}
                </h2>
              </div>
              <Wallet className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-md">
              <div>
                <h2 className="text-sm text-gray-600 dark:text-gray-300">
                  Sum of Income Streams
                </h2>
                <h2 className="font-bold text-2xl text-gray-900 dark:text-gray-100">
                  ₹{formatNumber(totalIncome)}
                </h2>
              </div>
              <BadgeIndianRupee className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              className="h-[110px] w-full bg-slate-200 dark:bg-gray-700 animate-pulse rounded-lg"
              key={index}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardInfo;
