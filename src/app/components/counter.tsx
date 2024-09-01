"use client";

import React, { useState } from "react";

type CounterProps = {
  initialCount: number;
};

const Counter: React.FC<CounterProps> = ({ initialCount = 50 }) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="p-10 flex flex-col items-start justify-center transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Counter: {count}
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={decrement}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 dark:hover:bg-red-700"
          >
            Decrement
          </button>
          <button
            onClick={increment}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 dark:hover:bg-green-700"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export { Counter };
