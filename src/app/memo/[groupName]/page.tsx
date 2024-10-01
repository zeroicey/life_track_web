"use client";

import MemoList from "@/components/memo/MemoList";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function MemoGroup({
  params,
}: {
  params: { groupName: String };
}) {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-full gap-2 p-3">
      <div className="border rounded-lg border-cyan-400 w-full flex flex-row justify-between items-center px-2">
        <button>
          <IoMdArrowRoundBack onClick={() => router.push("/memo")} />
        </button>
        <span>{params.groupName}</span>
        <span>time</span>
      </div>
      <MemoList />
    </div>
  );
}
