import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosMore } from "react-icons/io";

export default function MemoGroups() {
  return (
    <div className="w-full flex flex-grow flex-col gap-2 border border-red-800 rounded-lg p-2">
      <div className="w-full border-2 rounded-lg border-green-300 text-lg py-2 px-3 flex justify-between items-center">
        Group 1
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IoIosMore />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
