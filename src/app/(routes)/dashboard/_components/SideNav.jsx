import React, { useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Incomes",
      icon: IndianRupee,
      path: "/dashboard/incomes",
    },
    {
      id: 3,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 4,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 5,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-5 border shadow-sm bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
      <div className="flex flex-row items-center mb-5">
        <Image src="/chart-donut.svg" alt="logo" width={40} height={25} />
        <span className="text-blue-800 dark:text-white font-bold text-xl">
          FinanceSmart
        </span>
      </div>
      <div>
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id}>
            <h2
              className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-4 cursor-pointer rounded-full 
                hover:text-primary hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-700 
                ${
                  path === menu.path
                    ? "text-primary bg-blue-100 dark:bg-gray-700"
                    : ""
                }`}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="mt-5">
        <div className="flex items-center gap-2 p-4 text-gray-500 font-medium cursor-pointer rounded-full hover:bg-blue-100 dark:hover:bg-gray-700">
          <UserButton /> <span className="ml-2">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
