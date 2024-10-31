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

  if (!mounted) {
    return (
      <div className="navbar bg-base-100 shadow-md px-4">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Life Track
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/memo">Memo</Link></li>
            <li><Link href="/task">Task</Link></li>
            <li><Link href="/article">Article</Link></li>
            <li><Link href="/habit">Habit</Link></li>
            <li><Link href="/collect">Collect</Link></li>
            <li>
              <button className="btn btn-ghost btn-circle">
                <IoMdMoon />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Life Track
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/memo">Memo</Link></li>
          <li><Link href="/task">Task</Link></li>
          <li><Link href="/article">Article</Link></li>
          <li><Link href="/habit">Habit</Link></li>
          <li><Link href="/collect">Collect</Link></li>
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="btn btn-ghost btn-circle"
            >
              {theme === "dark" ? <IoMdSunny /> : <IoMdMoon />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
} 