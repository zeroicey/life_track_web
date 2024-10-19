import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Group } from "@/app/memo/page";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  onGroupCreated: (newGroup: Group) => void; // 新增的回调
}

const GroupNewInput: React.FC<Props> = ({
  isVisible,
  onClose,
  onGroupCreated,
}) => {
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLDivElement).id === "input-background") {
      onClose();
    }
  };

  if (!isVisible) return null;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("/api/memo/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const resp = await response.json();

    if (resp.status) {
      // 如果请求成功，关闭浮窗
      onClose();
      // TODO: Type!!!!
      console.log(resp.data);
      onGroupCreated({
        memo_number: 0,
        ...resp.data,
      });
    } else {
      // 处理错误，例如显示错误消息
      console.error("Failed to create group");
    }
  };

  return (
    <div
      id="input-background"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div className="rounded-md z-50 relative">
        <Card className="w-full h-full p-8">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Create New Group</CardTitle>
            <CardDescription>A new group to record your memo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 px-0 pb-0">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={false}
              placeholder="Name"
              type="text"
              required
            />
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={false}
              placeholder="Description"
              type="text"
              required
            />
            <Button
              className="w-full"
              size="lg"
              disabled={false}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GroupNewInput;
