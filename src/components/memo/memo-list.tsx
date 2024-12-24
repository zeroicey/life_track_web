import { MemoItem } from "./memo-item";

interface Memo {
  id: string;
  content: string;
  tags: string[];
  createdAt: string;
}

interface MemoListProps {
  memos: Memo[];
}

export function MemoList({ memos }: MemoListProps) {
  return (
    <div className="space-y-4">
      {memos.map((memo) => (
        <MemoItem key={memo.id} {...memo} />
      ))}
    </div>
  );
}
