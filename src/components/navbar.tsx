"use client";
import { SidebarTrigger } from "./ui/sidebar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// 右侧的内容用一个列表存储，一个是名字，一个是跳转的链接
interface rightContent {
  name: string;
  url: string;
  onClick?: () => void;
}

export function Navbar() {
  const pathname = usePathname();
  const [moduleName, setModuleName] = useState("");
  const [rightContent, setRightContent] = useState<rightContent[]>([]);
  useEffect(() => {
    if (pathname === "/") {
      setModuleName("Home");
      setRightContent([]);
    } else if (pathname === "/memo") {
      setModuleName("Memo");
      setRightContent([
        {
          name: "Groups",
          url: "/memo/groups",
        },
        {
          name: "Tags",
          url: "/memo/tags",
        },
      ]);
    } else if (pathname === "/habit") {
    } else if (pathname === "/collect") {
    }
  }, [pathname]);

  return (
    <div className="w-full p-0.5 flex items-center border-b">
      <SidebarTrigger />
      <div className="w-full flex items-center flex-1 justify-between px-2">
        <div>
          <Link href={pathname}>{moduleName}</Link>
        </div>
        <div>
          <div className="flex gap-2">
            {rightContent.map((content) => (
              <Link
                href={content.url}
                key={content.name}
                className="text-sm hover:underline"
                onClick={content.onClick}
              >
                {content.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
