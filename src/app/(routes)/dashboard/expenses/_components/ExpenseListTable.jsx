import { db } from "../../../../../../utils/dbConfig";
import { Expenses } from "../../../../../../utils/schema";
import { eq } from "drizzle-orm";
import { Trash } from "lucide-react";
import React from "react";
import { toast } from "sonner";

function ExpenseListTable({ expensesList, refreshData }) {
  const deleteExpense = async (expense) => {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expense.id))
      .returning();

    if (result) {
      toast("Expense Deleted!");
      refreshData();
    }
  };

  return (
    <div className="mt-3">
      <h2 className="font-bold text-lg text-black dark:text-white">
        Latest Expenses
      </h2>
      <div className="grid grid-cols-4 rounded-tl-xl rounded-tr-xl bg-gray-200 dark:bg-gray-800 p-2 mt-3">
        <h2 className="font-bold text-black dark:text-white">Name</h2>
        <h2 className="font-bold text-black dark:text-white">Amount</h2>
        <h2 className="font-bold text-black dark:text-white">Date</h2>
        <h2 className="font-bold text-black dark:text-white">Action</h2>
      </div>
      {expensesList.map((expenses, index) => (
        <div
          key={index}
          className="grid grid-cols-4 bg-white dark:bg-gray-700 rounded-bl-xl rounded-br-xl p-2"
        >
          <h2 className="text-black dark:text-white">{expenses.name}</h2>
          <h2 className="text-black dark:text-white">{expenses.amount}</h2>
          <h2 className="text-black dark:text-white">{expenses.createdAt}</h2>
          <h2
            onClick={() => deleteExpense(expenses)}
            className="text-red-500 cursor-pointer dark:text-red-400"
          >
            Delete
          </h2>
          {/* <h2>
            <Trash
              className="text-red-500 cursor-pointer dark:text-red-400"
              onClick={() => deleteExpense(expenses)}
            />
          </h2> */}
        </div>
      ))}
    </div>
  );
}

export default ExpenseListTable;
