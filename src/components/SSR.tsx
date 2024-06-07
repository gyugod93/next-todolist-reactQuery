import { Todo } from "@/types";
import React from "react";

const SSR = async () => {
  const response = await fetch(`http://localhost:4000/todos`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    console.error("Failed to fetch company info");
    return <div>Error fetching company info</div>;
  }

  const todo = await response.json();

  if (!todo || Object.keys(todo).length === 0) {
    console.error("No company info found");
    return <div>No company info available</div>;
  }
  const todoData: Todo = todo[0];

  return (
    <div className="mt-8">
      <div className="border p-4 my-4">
        <div className="flex gap-8">
          <div>
            <h2 className="text-xl font-bold">{todoData.title}</h2>
            <p className="text-gray-600">{todoData.contents}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSR;
