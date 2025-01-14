import { MemoList } from "@/components/memo/memo-list";
import { MemoInput } from "@/components/memo/memo-input";

export default function MemoPage() {
  return (
    <div className="flex flex-col w-full h-full gap-2 p-4 border">
      <MemoInput />
      <MemoList />
    </div>
  );
}
