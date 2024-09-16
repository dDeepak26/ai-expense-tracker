import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "../../../../../../utils/dbConfig";
import { Expenses, Budgets } from "../../../../../../utils/schema";
import { Loader } from "lucide-react";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "sonner";

function AddExpense({ budgetId, user, refreshData }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Used to Add New Expense
   */
  const addNewExpense = async () => {
    setLoading(true);
    const result = await db
      .insert(Expenses)
      .values({
        name: name,
        amount: amount,
        budgetId: budgetId,
        createdAt: moment().format("DD/MM/yyyy"),
      })
      .returning({ insertedId: Budgets.id });

    setAmount("");
    setName("");
    if (result) {
      setLoading(false);
      refreshData();
      toast("New Expense Added!");
    }
    setLoading(false);
  };

  return (
    <div className="border p-5 rounded-2xl bg-white dark:bg-gray-800 text-black dark:text-white">
      <h2 className="font-bold text-lg">Add Expense</h2>
      <div className="mt-2">
        <h2 className="font-medium my-1">Expense Name</h2>
        <Input
          placeholder="e.g. Bedroom Decor"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white border-gray-300 dark:border-gray-700"
        />
      </div>
      <div className="mt-2">
        <h2 className="font-medium my-1">Expense Amount</h2>
        <Input
          placeholder="e.g. 1000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white border-gray-300 dark:border-gray-700"
        />
      </div>
      <Button
        disabled={!(name && amount) || loading}
        onClick={() => addNewExpense()}
        className="mt-3 w-full rounded-full bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-200"
      >
        {loading ? <Loader className="animate-spin" /> : "Add New Expense"}
      </Button>
    </div>
  );
}

export default AddExpense;
