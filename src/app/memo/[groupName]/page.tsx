"use client";

import MemoList from "@/components/memo/memo-list";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack, IoMdAdd } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function MemoGroup({
  params,
}: {
  params: { groupName: string };
}) {
  const router = useRouter();
  const group_name = params.groupName
    ? decodeURIComponent(params.groupName as string)
    : "";
  return (
    <div className="flex flex-col w-full h-full gap-2">
      <div className="border-2 rounded-lg border-cyan-400 w-full flex flex-row justify-between items-center px-2 py-1">
        <button>
          <IoMdArrowRoundBack onClick={() => router.push("/memo")} />
        </button>
        <HoverCard>
          <HoverCardTrigger>
            <Button variant="link" className="text-lg">
              {group_name}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent>
            The React Framework – created and maintained by @vercel.
          </HoverCardContent>
        </HoverCard>
        <button>
          <IoMdAdd onClick={() => {}} />
        </button>
      </div>
      <MemoList />
    </div>
  );
}
