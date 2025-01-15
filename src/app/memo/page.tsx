import { MemoList } from "@/components/memo/memo-list";
import { MemoInput } from "@/components/memo/memo-input";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memo",
};

export default function MemoPage() {
  return (
    <div className="flex flex-col w-full h-full gap-2">
      <MemoInput />
      <MemoList />
    </div>
  );
}
