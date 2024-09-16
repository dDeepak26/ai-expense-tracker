import React from "react";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/ui/ThemeToggle";

const DashboardHeader = () => {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between items-center bg-white dark:bg-gray-800 dark:border-gray-700">
      {/* Left Side Placeholder */}
      <div className="flex-1"></div>

      {/* User Button */}
      <div className="flex-shrink-0">
        <UserButton afterSignOutUrl="/" />
      </div>

      {/* Theme Toggle */}
      <div className="flex-shrink-0">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DashboardHeader;
