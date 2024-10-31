"use client";
import Link from "next/link";
import { IoMdHome, IoMdArrowRoundBack } from "react-icons/io";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold">页面未找到</h2>
          <p className="text-base-content/70">
            抱歉，您访问的页面不存在或已被移除
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link href="/" className="btn btn-primary gap-2">
            <IoMdHome className="w-5 h-5" />
            返回首页
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline gap-2"
          >
            <IoMdArrowRoundBack className="w-5 h-5" />
            返回上一页
          </button>
        </div>

        {/* 装饰性图案 */}
        <div className="mt-12 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary blur opacity-30 animate-pulse"></div>
            <div className="relative bg-base-100 p-4 rounded-lg">
              <pre className="font-mono text-sm">
                {`{
  "status": 404,
  "message": "Page not found",
  "path": "${path}"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
