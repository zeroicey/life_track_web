"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack, IoMdAdd } from "react-icons/io";

export default function MemoGroup({
  params,
}: {
  params: Promise<{ group_id: string }>; // 将 params 定义为 Promise
}) {
  const router = useRouter();
  const { group_id } = React.use(params); // 使用 React.use 解包 params

  return (
    <div className="flex flex-col w-full h-full gap-2">
      <div className="border-2 rounded-lg border-cyan-400 w-full flex flex-row justify-between items-center px-2 py-1">
        <button>
          <IoMdArrowRoundBack onClick={() => router.push("/memo")} />
        </button>
        {group_id}
        <button>
          <IoMdAdd onClick={() => {}} />
        </button>
      </div>
    </div>
  );
}
