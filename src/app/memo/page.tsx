import { MemoList } from "@/components/memo/memo-list";
import { MemoInput } from "@/components/memo/memo-input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function MemoPage() {
  return (
    <div className="flex flex-col w-full h-full gap-2 px-4 py-4 border">
      <div className="flex items-center gap-2 border">
        <SidebarTrigger />
        <h1 className="text-2xl font-bold">Memo</h1>
      </div>
      <MemoInput />
      <MemoList />
    </div>
  );
}
