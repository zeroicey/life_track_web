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

  const fetchGroups = async () => {
    const response = await groupApi.getAll();
    if (!response.status || !response.data) return;
    setGroups(response.data);
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

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">备忘录分组</h1>
        <button 
          className="btn btn-primary"
          onClick={() => setIsNewGroupModalOpen(true)}
        >
          <IoMdAdd /> 新建分组
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group) => (
          <div key={group._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-start">
                <h2 className="card-title">
                  <Link href={`/memo/${group._id}`}>{group.name}</Link>
                </h2>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <IoIosMore />
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-[1]">
                    <li>
                      <button 
                        className="text-left"
                        onClick={(e) => handleUpdate(e, group)}
                      >
                        编辑
                      </button>
                    </li>
                    <li>
                      <button 
                        className="text-left text-error"
                        onClick={(e) => handleDelete(e, group._id)}
                      >
                        删除
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-base-content/70">{group.description}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-base-content/60">
                <span>备忘录: {group.memo_count}</span>
                <span>更新于: {new Date(group.updated_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {groups.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-base-content/70">
          <div className="text-6xl mb-4">📁</div>
          <p className="text-xl font-semibold mb-2">还没有分组</p>
          <p className="mb-4">创建一个分组来开始管理你的备忘录吧！</p>
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
  );
}
