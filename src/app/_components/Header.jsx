"use client";

import React from "react";
import Image from "next/image";
import { useUser, UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <header className="p-5 border-b border-gray-300 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="container mx-auto flex flex-wrap items-center justify-between ">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Image src="/chart-donut.svg" alt="logo" width={40} height={25} />
          <span className="text-blue-800 dark:text-white font-bold text-xl">
            FinanceSmart
          </span>
        </div>

        {/* Navigation and User Button */}
        <div className="flex items-center space-x-3">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <div className="flex items-center space-x-3">
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="rounded-full
                  border-gray-300 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Dashboard
                </Button>
              </Link>
              <Link href="/get-started">
                <Button className="rounded-full dark:text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          )}

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
