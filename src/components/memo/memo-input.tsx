"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function MemoInput() {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!content.trim()) return;
    
    // TODO: Implement memo submission
    console.log("Submitting memo:", content);
    setContent("");
  };

  return (
    <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-2xl mx-auto p-4">
        <Textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[100px] resize-none mb-2"
        />
        <div className="flex justify-end">
          <Button 
            onClick={handleSubmit}
            disabled={!content.trim()}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
