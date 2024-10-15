"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosMore } from "react-icons/io";
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
import { useState } from "react";
import GroupNewInput from "@/components/memo/group-new-input";

const groups = [
  {
    id: 1,
    name: "Memo 1",
    created_at: "2024-09-01T10:00:00Z",
    updated_at: "2024-09-02T12:00:00Z",
    description: "This is the first memo",
    memo_number: 1,
  },
  {
    id: 2,
    name: "Memo 2",
    created_at: "2024-09-05T14:00:00Z",
    updated_at: "2024-09-06T16:30:00Z",
    description: "This is the second memo",
    memo_number: 2,
  },
  {
    id: 3,
    name: "Memo 3",
    created_at: "2024-09-10T09:15:00Z",
    updated_at: "2024-09-11T11:45:00Z",
    description: "This is the third memo",
    memo_number: 3,
  },
  {
    id: 4,
    name: "Memo 4",
    created_at: "2024-09-15T08:00:00Z",
    updated_at: "2024-09-16T09:00:00Z",
    description: "This is the fourth memo",
    memo_number: 4,
  },
  {
    id: 5,
    name: "Memo 5",
    created_at: "2024-09-20T13:45:00Z",
    updated_at: "2024-09-21T15:00:00Z",
    description: "This is the fifth memo",
    memo_number: 5,
  },
  {
    id: 6,
    name: "Memo 6",
    created_at: "2024-09-22T11:30:00Z",
    updated_at: "2024-09-23T14:00:00Z",
    description: "This is the sixth memo",
    memo_number: 6,
  },
  {
    id: 7,
    name: "Memo 7",
    created_at: "2024-09-25T12:00:00Z",
    updated_at: "2024-09-26T15:15:00Z",
    description: "This is the seventh memo",
    memo_number: 7,
  },
  {
    id: 8,
    name: "Memo 8",
    created_at: "2024-09-28T07:45:00Z",
    updated_at: "2024-09-29T09:30:00Z",
    description: "This is the eighth memo",
    memo_number: 8,
  },
  {
    id: 9,
    name: "Memo 9",
    created_at: "2024-09-30T08:30:00Z",
    updated_at: "2024-10-01T10:45:00Z",
    description: "This is the ninth memo",
    memo_number: 9,
  },
  {
    id: 10,
    name: "Memo 10",
    created_at: "2024-10-02T06:00:00Z",
    updated_at: "2024-10-03T08:00:00Z",
    description: "This is the tenth memo",
    memo_number: 10,
  },
  {
    id: 11,
    name: "Memo 11",
    created_at: "2024-10-04T11:30:00Z",
    updated_at: "2024-10-05T13:45:00Z",
    description: "This is the eleventh memo",
    memo_number: 11,
  },
  {
    id: 12,
    name: "Memo 12",
    created_at: "2024-10-06T10:45:00Z",
    updated_at: "2024-10-07T12:15:00Z",
    description: "This is the twelfth memo",
    memo_number: 12,
  },
  {
    id: 13,
    name: "Memo 13",
    created_at: "2024-10-08T09:00:00Z",
    updated_at: "2024-10-09T11:00:00Z",
    description: "This is the thirteenth memo",
    memo_number: 13,
  },
  {
    id: 14,
    name: "Memo 14",
    created_at: "2024-10-10T15:00:00Z",
    updated_at: "2024-10-11T17:00:00Z",
    description: "This is the fourteenth memo",
    memo_number: 14,
  },
  {
    id: 15,
    name: "Memo 15",
    created_at: "2024-10-12T08:30:00Z",
    updated_at: "2024-10-13T09:45:00Z",
    description: "This is the fifteenth memo",
    memo_number: 15,
  },
];

export default function TableDemo() {
  const [isNewInputVisible, setNewInputVisible] = useState(false);
  return (
    <div className="border-2 rounded p-2 border-red-700">
      <GroupNewInput
        isVisible={isNewInputVisible}
        onClose={() => setNewInputVisible(false)}
      />
      <button onClick={() => setNewInputVisible(true)}>aaa</button>
      <Table>
        <TableCaption>A list of your all groups.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] hidden md:table-cell">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Create At</TableHead>
            <TableHead className="hidden md:table-cell">Update At</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="hidden md:table-cell">Memo Number</TableHead>
            <TableHead>Handle</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groups.map((group) => (
            <TableRow key={group.id}>
              <TableCell className="font-medium hidden md:table-cell">
                {group.id}
              </TableCell>
              <TableCell>
                <Link href={`/memo/${group.name}`}>{group.name}</Link>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {group.created_at}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {group.updated_at}
              </TableCell>
              <TableCell>{group.description}</TableCell>
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
