"use client";

import React from "react";
import Image from "next/image";
import { useUser, UserButton, UserProfile } from "@clerk/nextjs";
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
            <div className="flex items-center space-x-3">
              <Link href="/dashboard">
                <Button className="rounded-full dark:text-white hover:bg-blue-800 hover:border-black dark:hover:bg-blue-900">
                  Dashboard
                </Button>
              </Link>
              <UserButton
                className="rounded-full w-8 h-8"
                afterSignOutUrl="/"
              />
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link href="/sign-in">
                <Button className="rounded-full dark:text-white hover:bg-blue-800 hover:border-black dark:hover:bg-blue-900">
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
