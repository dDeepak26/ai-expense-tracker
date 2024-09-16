"use client";

import React, { useState } from "react";
import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [theme, setTheme] = useState("light");
  const router = useRouter();

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Handle redirect to home page
  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <section
      className={`min-h-screen transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen px-8 py-8 sm:px-12">
        <div className="max-w-md w-full text-center bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          {/* Home Button */}
          <div className="mb-6">
            <Link href="/">
              <Button
                onClick={redirectToHome}
                className={`inline-flex items-center justify-center rounded-full p-3 ${
                  theme === "light"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-800 text-white"
                }`}
              >
                <span className="font-Bold text-xl">Home</span>
              </Button>
            </Link>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Create Your Account
          </h1>

          {/* SignIn Component from Clerk */}
          <SignUp />

          {/* Toggle Theme Button */}
          <button
            onClick={toggleTheme}
            className={`fixed bottom-4 right-4 p-2 rounded-full ${
              theme === "light"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
