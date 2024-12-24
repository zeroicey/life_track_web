import { Home, FileText, Calendar, CheckSquare, Box, Repeat, File } from "lucide-react";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import logo from "@/assets/logo.png";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Memo",
    url: "#",
    icon: FileText,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Task",
    url: "#",
    icon: CheckSquare,
  },
  {
    title: "Collect",
    url: "#",
    icon: Box,
  },
  {
    title: "Habit",
    url: "#",
    icon: Repeat,
  },
  {
    title: "Article",
    url: "#",
    icon: File,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <Image src={logo} alt="Life Track" width={20} height={20} />
            <span>Life Track</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
