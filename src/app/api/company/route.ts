export async function GET(request: Request) {
  const response = await fetch("http://localhost:4000/companyInfo");
  const companyInfo = await response.json();

  if (!companyInfo) {
    return new Response("companyInfo is not found", { status: 404 });
  }

  return Response.json({ companyInfo: [...companyInfo, { test: "test" }] });
}

export async function POST(request: Request) {
  const { id, name, description } = await request.json();

  const response = await fetch("http//:localhost:4000/companyInfo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name, description, isDone: false }),
  });

  const companyInfo = await response.json();

  return Response.json({ companyInfo });
}

export async function PATCH(request: Request) {
  const { id, name, description, isDone } = await request.json();

  const response = await fetch(`http//:localhost:4000/companyInfo/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description, isDone }),
  });

  if (!response.ok) {
    return new Response("Failed to update company info", {
      status: response.status,
    });
  }

  const updatedCompanyInfo = await response.json();

  return Response.json({ updatedCompanyInfo });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const response = await fetch(`http://localhost:4000/companyInfo/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    return new Response("Failed to delete company info", {
      status: response.status,
    });
  }

  return new Response("Company info deleted successfully", { status: 200 });
}
