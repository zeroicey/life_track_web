"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image, Link, Send, Smile } from "lucide-react";
import { useState } from "react";

export function MemoInput() {
  const [content, setContent] = useState("");

  return (
    <div className="relative flex flex-col gap-3 rounded-xl bg-background/80 p-4 border border-border/50
      backdrop-blur-sm shadow-lg before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-primary/5 before:to-transparent before:pointer-events-none">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[100px] resize-none scrollbar-hide border-none focus-visible:ring-0 p-3 
          bg-background/50 rounded-xl backdrop-blur-sm
          shadow-[inset_1px_1px_1px_rgba(0,0,0,0.1)]"
        placeholder="写下你的想法..."
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors"
          >
            <Image className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors"
          >
            <Link className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors"
          >
            <Smile className="h-4 w-4" />
          </Button>
        </div>
        <Button 
          size="sm"
          disabled={!content.trim()}
          className="px-4 rounded-lg bg-primary/90 hover:bg-primary text-primary-foreground
            shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50"
        >
          <Send className="h-4 w-4 mr-2" />
          发送
        </Button>
      </div>
    </div>
  );
}
