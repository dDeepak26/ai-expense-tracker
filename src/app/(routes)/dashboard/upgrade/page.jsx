import React from "react";

// Reusable SVG Checkmark Icon Component
const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-5 h-5 text-indigo-700 dark:text-indigo-400"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

function Upgrade() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          {/* Pro Plan Card */}
          <div className="rounded-2xl border border-indigo-600 bg-white dark:bg-gray-800 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Pro <span className="sr-only">Plan</span>
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
                  $30
                </strong>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  /month
                </span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              {[
                "20 users included",
                "5GB of storage",
                "Email support",
                "Help center access",
                "Phone support",
                "Community access",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckmarkIcon />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Get Started
            </a>
          </div>

          {/* Starter Plan Card */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Starter <span className="sr-only">Plan</span>
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
                  $20
                </strong>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  /month
                </span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              {[
                "10 users included",
                "2GB of storage",
                "Email support",
                "Help center access",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckmarkIcon />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-full border border-indigo-600 bg-white dark:bg-gray-900 px-12 py-3 text-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
