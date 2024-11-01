"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "/memo", label: "Memo" },
    { href: "/task", label: "Task" },
    { href: "/article", label: "Article" },
    { href: "/habit", label: "Habit" },
    { href: "/collect", label: "Collect" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-md px-4 transition-colors duration-200">
      <div className="flex-1">
        <Link 
          href="/" 
          className="btn btn-ghost normal-case text-xl font-bold text-base-content hover:text-primary"
        >
          Life Track
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className="text-base-content/90 hover:text-primary hover:bg-base-200 rounded-lg px-3 py-2 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {mounted && (
            <li className="ml-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="btn btn-ghost btn-sm btn-circle hover:bg-base-200 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <IoMdSunny className="w-5 h-5 text-base-content" />
                ) : (
                  <IoMdMoon className="w-5 h-5 text-base-content" />
                )}
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
} 