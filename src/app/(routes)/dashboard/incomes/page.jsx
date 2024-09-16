import React from "react";
import IncomeList from "./_components/IncomeList";

function Income() {
  return (
    <div className="p-10 bg-white dark:bg-gray-900 min-h-screen">
      <h2 className="font-bold text-3xl text-gray-900 dark:text-gray-100">
        My Income Streams
      </h2>
      <IncomeList />
    </div>
  );
}

export default Income;
