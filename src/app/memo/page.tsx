"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosMore, IoMdAdd } from "react-icons/io";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useEffect, useState } from "react";
import GroupNewInput from "@/components/memo/group-new-input";

export interface Group {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  description: string;
  memo_number: number;
}

export default function TableDemo() {
  const [isNewInputVisible, setNewInputVisible] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    // 获取所有 MemoGroups
    const fetchGroups = async () => {
      try {
        const response = await fetch("/api/memo/groups", {
          method: "GET",
        });
        const data = await response.json();
        if (data.status) {
          setGroups(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Failed to fetch groups:", error);
      }
    };

    fetchGroups();
  }, []);
  const handleGroupCreated = (newGroup: Group) => {
    setGroups((prevGroups) => [newGroup, ...prevGroups]); // 添加新组到现有组列表
  };
  return (
    <div className="border-2 rounded p-2 border-red-700">
      <GroupNewInput
        isVisible={isNewInputVisible}
        onClose={() => setNewInputVisible(false)}
        // TODO: WDF It is ? How to do it?
        onGroupCreated={handleGroupCreated}
      />
      <button onClick={() => setNewInputVisible(true)}>
        <IoMdAdd />
      </button>
      <Table>
        <TableCaption>A list of your all groups.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Create At</TableHead>
            <TableHead>Update At</TableHead>
            <TableHead className="hidden md:table-cell">Description</TableHead>
            <TableHead className="hidden md:table-cell">Memo Number</TableHead>
            <TableHead>Handle</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groups.map((group) => (
            <TableRow key={group.id}>
              <TableCell>
                <Link href={`/memo/${group.name}`}>{group.name}</Link>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {group.created_at}
              </TableCell>
              <TableCell>{group.updated_at}</TableCell>
              <TableCell className="hidden md:table-cell">
                {group.description}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {group.memo_number}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <IoIosMore />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>{group.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                    <DropdownMenuItem>Empty</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
