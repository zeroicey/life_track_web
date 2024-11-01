"use client";
import { groupApi, Group } from "@/services/memo/group";
import Link from "next/link";
import { IoIosMore, IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import GroupNewInput from "@/components/memo/group-new-input";
import GroupUpdateInput from "@/components/memo/group-update-input";

export default function MemoGroups() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isNewGroupModalOpen, setIsNewGroupModalOpen] = useState(false);
  const [isUpdateGroupModalOpen, setIsUpdateGroupModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGroups = async () => {
    try {
      const response = await groupApi.getAll();
      if (!response.status || !response.data) return;
      setGroups(response.data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!window.confirm("确定要删除这个分组吗？")) return;
    const response = await groupApi.delete(id);
    if (!response.status) {
      alert(response.message);
      return;
    }
    fetchGroups();
  };

  const handleUpdate = (e: React.MouseEvent, group: Group) => {
    e.preventDefault();
    e.stopPropagation();
    
    setSelectedGroup(group);
    setIsUpdateGroupModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-100 flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-base-100 p-4 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-base-content">备忘录分组</h1>
          <button 
            className="btn btn-primary"
            onClick={() => setIsNewGroupModalOpen(true)}
          >
            <IoMdAdd className="w-5 h-5" /> 新建分组
          </button>
        </div>

        {/* Groups Grid */}
        {groups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <Link 
                key={group._id} 
                href={`/memo/${group._id}`}
                className="card bg-base-100 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <h2 className="card-title text-base-content group-hover:text-primary">
                      {group.name}
                    </h2>
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
                        <IoIosMore className="w-5 h-5 text-base-content/70" />
                      </label>
                      <ul tabIndex={0} className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-lg w-52 z-[1]">
                        <li>
                          <button 
                            className="text-base-content hover:text-primary hover:bg-base-200"
                            onClick={(e) => handleUpdate(e, group)}
                          >
                            编辑
                          </button>
                        </li>
                        <li>
                          <button 
                            className="text-error hover:bg-error/10"
                            onClick={(e) => handleDelete(e, group._id)}
                          >
                            删除
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-base-content/70 line-clamp-2">{group.description}</p>
                  <div className="flex justify-between items-center mt-4 text-sm text-base-content/60">
                    <div className="badge badge-primary badge-outline">
                      {group.memo_count} 条备忘录
                    </div>
                    <span>
                      更新于 {new Date(group.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 bg-base-100 rounded-lg shadow-sm">
            <div className="text-6xl mb-4">📁</div>
            <p className="text-xl font-semibold text-base-content mb-2">还没有分组</p>
            <p className="text-base-content/70 mb-4">创建一个分组来开始管理你的备忘录吧！</p>
            <button
              className="btn btn-primary"
              onClick={() => setIsNewGroupModalOpen(true)}
            >
              <IoMdAdd className="w-5 h-5" /> 新建分组
            </button>
          </div>
        )}

        {/* Modals */}
        <GroupNewInput
          isOpen={isNewGroupModalOpen}
          onClose={() => setIsNewGroupModalOpen(false)}
          onSuccess={fetchGroups}
        />

        <GroupUpdateInput
          isOpen={isUpdateGroupModalOpen}
          onClose={() => {
            setIsUpdateGroupModalOpen(false);
            setSelectedGroup(null);
          }}
          onSuccess={fetchGroups}
          group={selectedGroup}
        />
      </div>
    </div>
  );
}
