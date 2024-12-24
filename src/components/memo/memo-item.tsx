import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";

interface MemoItemProps {
  content?: string;
  createdAt?: string;
  attachments?: string[];
}

export function MemoItem({ content = "这是一条示例备忘录", createdAt = "2024-03-24 12:00" }: MemoItemProps) {
  return (
    <div className="group relative flex flex-col gap-2 p-4 rounded-xl bg-background/80 
      backdrop-blur-sm border border-border/50
      before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r 
      before:from-primary/5 before:via-transparent before:to-primary/5 before:pointer-events-none
      hover:bg-accent/20 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{createdAt}</span>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity
            hover:bg-primary/10"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
      <div className="text-sm text-foreground whitespace-pre-wrap">{content}</div>
    </div>
  );
}
