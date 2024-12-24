"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image, Link, Send, Smile } from "lucide-react";
import { useState } from "react";

export function MemoInput() {
  const [content, setContent] = useState("");

  return (
    <div className="flex flex-col gap-2 rounded-md w-full bg-background p-3 border border-border">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[100px] resize-none scrollbar-hide border-none focus-visible:ring-0 p-0 bg-background"
        placeholder="写下你的想法..."
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Image className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Link className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Smile className="h-4 w-4" />
          </Button>
        </div>
        <Button size="sm" disabled={!content.trim()}>
          <Send className="h-4 w-4 mr-2" />
          发送
        </Button>
      </div>
    </div>
  );
}
