"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image, Link, Send, Smile } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { GroupSelect } from "./group-select";

export function MemoInput() {
  const [content, setContent] = useState("");
  const [position, setPosition] = React.useState("bottom");

  return (
    <div className="flex flex-col gap-1">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[100px] resize-none"
        placeholder="Write your memo..."
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Image className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Link className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Smile className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-1 items-center">
          <GroupSelect />
          <Button size="sm" disabled={!content.trim()} className="">
            <Send className="h-4 w-4" />
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
