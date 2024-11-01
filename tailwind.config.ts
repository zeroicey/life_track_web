import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#2563eb",          // 蓝色
          "secondary": "#4b5563",        // 更深的灰色，提高对比度
          "accent": "#059669",           // 更深的绿色
          "neutral": "#1f2937",          // 深灰
          "base-100": "#ffffff",         // 白色背景
          "base-200": "#f3f4f6",         // 浅灰背景
          "base-300": "#e5e7eb",         // 更浅的灰色
          "base-content": "#111827",     // 更深的文本颜色，提高对比度
          "info": "#2563eb",             // 更深的信息蓝
          "success": "#059669",          // 更深的成功绿
          "warning": "#d97706",          // 更深的警告黄
          "error": "#dc2626",            // 更深的错误红
        },
        dark: {
          "primary": "#3b82f6",          // 亮蓝色
          "secondary": "#9ca3af",        // 浅灰色
          "accent": "#34d399",           // 亮绿色
          "neutral": "#d1d5db",          // 浅灰
          "base-100": "#1f2937",         // 深色背景
          "base-200": "#111827",         // 更深的背景
          "base-300": "#0f172a",         // 最深的背景
          "base-content": "#f3f4f6",     // 主要文本颜色
          "info": "#60a5fa",             // 亮信息蓝
          "success": "#34d399",          // 亮成功绿
          "warning": "#fbbf24",          // 亮警告黄
          "error": "#f87171",            // 亮错误红
        },
      },
    ],
  },
};

export default config;
