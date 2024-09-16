import React from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/ThemeToggle";

const DashboardHeader = () => {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between items-center bg-white dark:bg-gray-800 dark:border-gray-700">
      {/* Left Side Placeholder */}
      <div className="flex-1"></div>

      {/* User Button */}
      <div className="flex-shrink-0 flex flex-row justify-between items-center space-x-3">
        <Link href="/">
          <Button className="rounded-full dark:text-white hover:bg-blue-800 hover:border-black dark:hover:bg-blue-900">
            Home
          </Button>
        </Link>
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
