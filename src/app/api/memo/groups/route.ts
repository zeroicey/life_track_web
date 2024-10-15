import { NextResponse } from "next/server";

// GET /api/memo/groups
export async function GET() {
  const response = await fetch("http://localhost:3000/api/memo/groups");
  const groups = await response.json();

  return NextResponse.json(groups);
}

// POST /api/memo/groups
export async function POST(req: Request) {
  const { name } = await req.json();

  const response = await fetch("http://localhost:3000/api/memo/groups", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.ok ? 200 : 400 });
}

// PATCH /api/memo/groups/:id
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const { name } = await req.json();

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const response = await fetch(`http://localhost:3000/api/memo/groups/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.ok ? 200 : 404 });
}

// DELETE /api/memo/groups/:id
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const response = await fetch(`http://localhost:3000/api/memo/groups/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();

  return NextResponse.json(data, { status: response.ok ? 200 : 404 });
}
