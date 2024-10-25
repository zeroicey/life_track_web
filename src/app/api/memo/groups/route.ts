import { NextResponse } from "next/server";
import { Responder } from "@/app/api/response";

// GET /api/memo/groups
export async function GET() {
  const response = await fetch("http://localhost:3000/api/memo/groups");
  const groups: Responder = await response.json();

  return NextResponse.json(groups);
}

// POST /api/memo/groups
export async function POST(req: Request) {
  const { name, description } = await req.json();
  console.log(name, description);

  const response = await fetch("http://localhost:3000/api/memo/groups", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description }),
  });

  const resp: Responder = await response.json();
  console.log(resp);
  return NextResponse.json({ status: resp.status, data: resp.data });
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

  const resp: Responder = await response.json();
  return NextResponse.json(resp);
}
