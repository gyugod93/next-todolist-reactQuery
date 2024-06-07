"use client";

import React, { useEffect, useState } from "react";
import type { Todo } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

const CSR = () => {
  const queryClient = useQueryClient();
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(`http://localhost:4000/todos`);
      const data = await response.json();
      setTodo(data[0]);
      console.log(data);
      console.log(todo);
    };
    fetchTodo();
  }, []);

  if (!todo) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="mt-8">
      <div className="border p-4 my-4">
        <div className="flex gap-8">
          <div>
            <h2 className="text-xl font-bold">{todo.title}</h2>
            <p className="text-gray-600">{todo.contents}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSR;
