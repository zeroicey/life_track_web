"use client";
import Link from "next/link";
import { IoMdHome, IoMdArrowRoundBack } from "react-icons/io";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      <div className="text-center space-y-8 p-4">
        {/* 404 图标 */}
        <div className="text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          404
        </div>

        {/* 错误信息 */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-base-content">
            页面未找到
          </h1>
          <p className="text-base-content/70">
            抱歉，您访问的页面不存在或已被移除。
          </p>
        </div>

        {/* 操作按钮 */}
        <div className="flex justify-center gap-4">
          <Link 
            href="/"
            className="btn btn-primary gap-2"
          >
            <IoMdHome className="w-5 h-5" />
            返回首页
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn btn-outline gap-2"
          >
            <IoMdArrowRoundBack className="w-5 h-5" />
            返回上页
          </button>
        </div>

        {/* 提示信息 */}
        <p className="text-sm text-base-content/60">
          如果您认为这是一个错误，请联系管理员。
        </p>
      </div>
    </div>
  );
}
