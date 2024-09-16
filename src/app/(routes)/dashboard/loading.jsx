import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        <span className="text-gray-700 dark:text-gray-300">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
