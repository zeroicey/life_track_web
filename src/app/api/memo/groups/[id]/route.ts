// pages/api/memo/groups/[id]/route.ts
import { Responder } from "@/app/api/response";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  console.log(id);

  if (isNaN(id)) {
    return NextResponse.json({ status: false });
  }

  const response = await fetch(`http://localhost:3000/api/memo/groups/${id}`, {
    method: "DELETE",
  });
  const resp: Responder = await response.json();

  return NextResponse.json({ status: resp.status });
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  console.log(id);

  if (isNaN(id)) {
    return NextResponse.json(
      { status: false, message: "Invalid ID" },
      { status: 400 }
    );
  }

  const body = await req.json();

  // 确保 body 中包含必要的数据
  if (!body.name || !body.description) {
    return NextResponse.json(
      { status: false, message: "Missing fields" },
      { status: 400 }
    );
  }

  // 假设你在这里调用数据库更新逻辑
  const response = await fetch(`http://localhost:3000/api/memo/groups/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: body.name,
      description: body.description,
    }),
  });

  const resp: Responder = await response.json();

  return NextResponse.json({ status: resp.status, message: resp.message });
}
