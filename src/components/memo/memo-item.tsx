import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";

interface MemoItemProps {
  content?: string;
  createdAt?: string;
  attachments?: string[];
}

export function MemoItem({ content = "这是一条示例备忘录", createdAt = "2024-03-24 12:00" }: MemoItemProps) {
  return (
    <div className="flex flex-col gap-2 p-3 rounded-md border border-border bg-background hover:bg-accent/50 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{createdAt}</span>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
      <div className="text-sm text-foreground whitespace-pre-wrap">{content}</div>
    </div>
  );
}
