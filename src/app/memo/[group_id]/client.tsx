"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack, IoMdAdd } from "react-icons/io";
import { Group, groupApi } from "@/services/memo/group";
import { Memo, memoApi } from "@/services/memo/memo";
import MemoItem from "@/components/memo/memo-item";
import MemoNewInput from "@/components/memo/memo-new-input";
import MemoUpdateInput from "@/components/memo/memo-update-input";

interface ClientProps {
  groupId: string;
}

export default function MemoGroupClient({ groupId }: ClientProps) {
  const router = useRouter();
  const [group, setGroup] = useState<Group | null>(null);
  const [memos, setMemos] = useState<Memo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNewMemoModalOpen, setIsNewMemoModalOpen] = useState(false);
  const [isUpdateMemoModalOpen, setIsUpdateMemoModalOpen] = useState(false);
  const [selectedMemo, setSelectedMemo] = useState<Memo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchGroup = async () => {
    try {
      const response = await groupApi.getById(groupId);
      if (!response.status || !response.data) {
        setError("分组不存在");
        router.push("/memo");
        return;
      }
      setGroup(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "加载分组信息失败");
    }
  };

  const fetchMemos = async () => {
    try {
      const response = await memoApi.getByGroupId(groupId);
      if (!response.status || !response.data) {
        setError("加载备忘录失败");
        return;
      }
      setMemos(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "加载备忘录失败");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGroup();
    fetchMemos();
  }, [groupId]);

  const handleDelete = async (id: string) => {
    if (!window.confirm("确定要删除这条备忘录吗？")) return;
    try {
      const response = await memoApi.delete(id, groupId);
      if (!response.status) {
        setError(response.message);
        return;
      }
      await Promise.all([fetchMemos(), fetchGroup()]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "删除失败");
    }
  };

  const handleUpdate = (memo: Memo) => {
    setSelectedMemo(memo);
    setIsUpdateMemoModalOpen(true);
  };

  const handleUpdateSuccess = async () => {
    await Promise.all([fetchMemos(), fetchGroup()]);
    setIsUpdateMemoModalOpen(false);
    setSelectedMemo(null);
  };

  const handleCreateSuccess = async () => {
    await Promise.all([fetchMemos(), fetchGroup()]);
    setIsNewMemoModalOpen(false);
  };

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="alert alert-error shadow-lg">
          <span className="text-error-content">{error}</span>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-base-100 p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <button
              className="btn btn-ghost btn-circle hover:bg-base-200"
              onClick={() => router.push("/memo")}
            >
              <IoMdArrowRoundBack className="w-6 h-6 text-base-content" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-base-content">{group?.name}</h1>
              <p className="text-base-content/70 text-sm">{group?.description}</p>
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => setIsNewMemoModalOpen(true)}
          >
            <IoMdAdd className="w-5 h-5" /> 新建备忘录
          </button>
        </div>

        {/* Stats */}
        <div className="stats bg-base-100 shadow-sm w-full">
          <div className="stat">
            <div className="stat-title text-base-content/70">备忘录数量</div>
            <div className="stat-value text-primary">{group?.memo_count || 0}</div>
            <div className="stat-desc text-base-content/60">
              最后更新: {group?.updated_at ? new Date(group.updated_at).toLocaleString() : ""}
            </div>
          </div>
        </div>

        {/* Memos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memos.map((memo) => (
            <MemoItem
              key={memo._id}
              memo={memo}
              onDelete={() => handleDelete(memo._id)}
              onUpdate={() => handleUpdate(memo)}
            />
          ))}
        </div>

        {/* Empty State */}
        {memos.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 bg-base-100 rounded-lg shadow-sm">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-xl font-semibold text-base-content mb-2">还没有备忘录</p>
            <p className="text-base-content/70 mb-4">点击右上角的按钮创建第一条备忘录吧！</p>
            <button
              className="btn btn-primary"
              onClick={() => setIsNewMemoModalOpen(true)}
            >
              <IoMdAdd className="w-5 h-5" /> 新建备忘录
            </button>
          </div>
        )}

        {/* Modals */}
        <MemoNewInput
          isOpen={isNewMemoModalOpen}
          onClose={() => setIsNewMemoModalOpen(false)}
          onSuccess={handleCreateSuccess}
          groupId={groupId}
        />

        <MemoUpdateInput
          isOpen={isUpdateMemoModalOpen}
          onClose={() => {
            setIsUpdateMemoModalOpen(false);
            setSelectedMemo(null);
          }}
          onSuccess={handleUpdateSuccess}
          memo={selectedMemo}
        />
      </div>
    </div>
  );
} 