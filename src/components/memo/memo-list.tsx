import MemoItem from "./memo-item";
import { ScrollArea } from "@/components/ui/scroll-area"; // 引入shadcn的ScrollArea组件

export default function MemoList() {
  return (
    <ScrollArea className="flex-grow">
      <div className="flex flex-col gap-2">
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
      </div>
    </ScrollArea>
  );
}
