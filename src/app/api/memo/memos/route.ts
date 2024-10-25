import { NextResponse } from "next/server";
import { Responder } from "@/app/api/response";

// GET /api/memo/memos/:id
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const response = await fetch(`http://localhost:3000/api/memo/memos/${id}`);
  if (!response.ok) {
    return NextResponse.json({ error: "Memo not found" }, { status: 404 });
  }

  const memo = await response.json();
  return NextResponse.json(memo);
}

// POST /api/memo/memos
export async function POST(req: Request) {
  const { text, group_id } = await req.json();
  if (isNaN(Number(group_id))) {
    return NextResponse.json(
      { error: "Invalid group_id format" },
      { status: 400 }
    );
  }

  const response = await fetch("http://localhost:3000/api/memo/memos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, group_id: Number(group_id) }),
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.ok ? 200 : 400 });
}

// PATCH /api/memo/memos/:id
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const { group_id, text } = await req.json();

  if (isNaN(id) || isNaN(Number(group_id))) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const response = await fetch(`http://localhost:3000/api/memo/memos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ group_id: Number(group_id), text }),
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.ok ? 200 : 404 });
}

// DELETE /api/memo/memos/:id
export async function DELETE({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const response = await fetch(`http://localhost:3000/api/memo/memos/${id}`, {
    method: "DELETE",
  });
  const resp: Responder = await response.json();

  return NextResponse.json({ status: resp.status });
}
