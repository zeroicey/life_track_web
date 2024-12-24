import { MemoList } from "@/components/memo/memo-list";
import { MemoInput } from "@/components/memo/memo-input";
import { Separator } from "@/components/ui/separator";

export default function MemoPage() {
  return (
    <div className="flex flex-col w-full h-full gap-4 px-4 py-4">
      <MemoInput />
      <Separator className="my-2" />
      <MemoList />
    </div>
  );
}
