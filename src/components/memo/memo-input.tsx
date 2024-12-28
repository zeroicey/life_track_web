"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image, Link, Send, Smile } from "lucide-react";
import { useState } from "react";

export function MemoInput() {
  const [content, setContent] = useState("");

  return (
    <div className="flex flex-col gap-3 border p-2 mb-2">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[100px] resize-none scrollbar-hide border"
        placeholder="写下你的想法..."
      />
      <div className="flex justify-between items-center border">
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-lg 
              bg-background/50 dark:bg-background/50 
              hover:bg-primary/10 dark:hover:bg-primary/10 
              shadow-[0_1px_2px_rgba(0,0,0,0.02)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.1)]
              transition-colors"
          >
            <Image className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-lg 
              bg-background/50 dark:bg-background/50 
              hover:bg-primary/10 dark:hover:bg-primary/10 
              shadow-[0_1px_2px_rgba(0,0,0,0.02)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.1)]
              transition-colors"
          >
            <Link className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-lg 
              bg-background/50 dark:bg-background/50 
              hover:bg-primary/10 dark:hover:bg-primary/10 
              shadow-[0_1px_2px_rgba(0,0,0,0.02)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.1)]
              transition-colors"
          >
            <Smile className="h-4 w-4" />
          </Button>
        </div>
        <Button
          size="sm"
          disabled={!content.trim()}
          className="px-4 rounded-lg 
            bg-primary/90 hover:bg-primary 
            text-primary-foreground
            shadow-[0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.2)]
            hover:shadow-[0_4px_8px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]
            transition-all duration-200 
            disabled:opacity-50"
        >
          <Send className="h-4 w-4 mr-2" />
          发送
        </Button>
      </div>
    </div>
  );
}
