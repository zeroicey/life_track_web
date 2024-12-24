import { MemoList } from "@/components/memo/memo-list";
import { MemoInput } from "@/components/memo/memo-input";

// Temporary mock data
const mockMemos = [
  {
    id: "1",
    content: "Need to research more about React Server Components and how they can improve our application performance.",
    tags: ["react", "learning", "performance"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    content: "Remember to implement dark mode toggle in the navigation bar.",
    tags: ["ui", "feature"],
    createdAt: new Date().toISOString(),
  },
];

export default function MemoPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-8">Memos</h1>
          <MemoList memos={mockMemos} />
        </div>
      </div>
      <MemoInput />
    </div>
  );
}
