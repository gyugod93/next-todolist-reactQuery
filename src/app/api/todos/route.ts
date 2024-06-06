export async function GET(request: Request) {
  const response = await fetch("http:localhost:4000/todos");
  const todos = await response.json();

  if (!todos) {
    return new Response("todos is not found", { status: 404 });
  }

  return Response.json({ todos: [...todos, { test: "test" }] });
}

export async function POST(request: Request) {
  const { id, title, contents } = await request.json();

  const response = await fetch("http:localhost:4000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, title, contents, isDone: false }),
  });

  const todos = await response.json();

  return Response.json({ todos });
}

export async function PATCH(request: Request) {
  const { id, title, contents, isDone } = await request.json();

  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, title, contents, isDone }),
  });

  if (!response.ok) {
    return new Response("Failed to update todos", {
      status: response.status,
    });
  }

  const updatedTodos = await response.json();

  return Response.json({ updatedTodos });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    return new Response("Failed to delete todos", {
      status: response.status,
    });
  }

  return new Response("Todos deleted successfully", { status: 200 });
}
