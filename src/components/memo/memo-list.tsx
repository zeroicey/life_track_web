import { MemoItem } from "./memo-item";

const SAMPLE_MEMOS = [
  {
    content: "今天是个好天气，适合写代码！",
    createdAt: "2024-03-24 14:30",
  },
  {
    content: "记得完成项目文档的更新。",
    createdAt: "2024-03-24 13:15",
  },
  {
    content: "周会要点：\n1. 项目进度回顾\n2. 技术方案讨论\n3. 下周计划",
    createdAt: "2024-03-24 10:00",
  },
];

export function MemoList() {
  return (
    <div className="w-full flex flex-col gap-3 overflow-y-auto scrollbar-hide border p-2">
      {SAMPLE_MEMOS.map((memo, index) => (
        <MemoItem key={index} {...memo} />
      ))}
    </div>
  );
}
