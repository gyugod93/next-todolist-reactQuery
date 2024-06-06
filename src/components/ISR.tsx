import { Todo } from "@/types";
import React from "react";

const ISR = async () => {
  const response = await fetch(`http://localhost:4000/todos`, {
    next: { revalidate: 10 },
  });

  if (!response.ok) {
    console.error("Failed to fetch todos");
    return <div>Error fetching company info</div>;
  }

  const todos = await response.json();

  if (!todos || Object.keys(todos).length === 0) {
    console.error("No company info found");
    return <div>No company info available</div>;
  }
  const todosData: Todo = todos[0];
  return (
    <div className="mt-8">
      <div className="border p-4 my-4">
        <div className="flex gap-8">
          <div>
            <h2 className="text-xl font-bold">{todosData.title}</h2>
            <p className="text-gray-600">{todosData.contents}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISR;
