"use client";
import {
  Home,
  FileText,
  Calendar,
  CheckSquare,
  Box,
  Repeat,
  File,
  Sun,
  Moon,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
} from "@/components/ui/sidebar";

import logo from "@/assets/logo.png";

// Menu items with badges.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    badge: 5,
  },
  {
    title: "Memo",
    url: "#",
    icon: FileText,
    badge: 12,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
    badge: 3,
  },
  {
    title: "Task",
    url: "#",
    icon: CheckSquare,
    badge: 8,
  },
  {
    title: "Collect",
    url: "#",
    icon: Box,
    badge: 15,
  },
  {
    title: "Habit",
    url: "#",
    icon: Repeat,
    badge: 7,
  },
  {
    title: "Article",
    url: "#",
    icon: File,
    badge: 24,
  },
];

export function AppSidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <Image src={logo} alt="Life Track" width={20} height={20} />
            <span>Life Track</span>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-auto p-2 rounded transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              {theme === "light" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                      {item.title !== "Home" && (
                        <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                      )}
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
