"use client";
import { delete_group, get_all_groups, Group } from "@/api/memo/group";
import { ApiResponse } from "@/api/response";
import Link from "next/link";
import { IoIosMore, IoMdAdd } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import GroupNewInput from "@/components/memo/group-new-input";
import GroupUpdateInput from "@/components/memo/group-update-input";

export default function MemoGroups() {
  const [groups, setGroups] = useState<Group[]>([]);
  // 改名为更具体的名称
  const [isNewGroupModalOpen, setIsNewGroupModalOpen] = useState(false);
  const [isUpdateGroupModalOpen, setIsUpdateGroupModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const fetchGroups = async () => {
    const response: ApiResponse<Group[]> = await get_all_groups();
    if (!response.status || !response.data) {
      return;
    }
    setGroups(response.data);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  // 添加删除处理函数
  const handleDelete = async (id: number) => {
    // 使用 confirm 询问用户
    if (!window.confirm("Are you sure you want to delete this group?")) {
      return;
    }

    const response = await delete_group(id);
    if (!response.status) {
      alert(response.message);
      return;
    }

    // 删除成功后刷新列表
    fetchGroups();
  };

  // 添加更新处理函数
  const handleUpdate = (group: Group) => {
    setSelectedGroup(group);
    setIsUpdateGroupModalOpen(true);
  };

  return (
    <div className="flex flex-col p-5 gap-3 h-screen">
      <div className="flex flex-row items-center w-full border rounded-lg py-2 px-6">
        <div className="breadcrumbs text-sm flex-grow">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Memo</a>
            </li>
          </ul>
        </div>
        <button onClick={() => setIsNewGroupModalOpen(true)}>
          <IoMdAdd />
        </button>
      </div>
      <div className="border w-full rounded-lg overflow-y-auto p-2 flex-1">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="w-[15%]">Name</th>
              <th className="hidden md:table-cell w-[15%]">Created At</th>
              <th className="w-[15%]">Updated At</th>
              <th className="hidden md:table-cell w-[30%]">Description</th>
              <th className="hidden md:table-cell w-[15%]">Memo Number</th>
              <th className="w-[10%]">Handle</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group: Group) => (
              <tr key={group.id}>
                <td className="truncate max-w-0">
                  <Link className="link link-accent" href={`/memo/${group.id}`}>
                    {group.name}
                  </Link>
                </td>
                <td className="hidden md:table-cell truncate max-w-0">
                  {group.created_at}
                </td>
                <td className="truncate max-w-0">{group.updated_at}</td>
                <td className="hidden md:table-cell truncate max-w-0">
                  {group.description}
                </td>
                <td className="hidden md:table-cell">
                  <div className="badge badge-accent">{group.memo_number}</div>
                </td>
                <td>
                  <details className="dropdown dropdown-end">
                    <summary className="btn m-1">
                      <IoIosMore />
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                      <li>
                        <a onClick={() => handleDelete(group.id)}>Delete</a>
                      </li>
                      <li>
                        <a onClick={() => handleUpdate(group)}>Edit</a>
                      </li>
                      <li>
                        <a>Empty</a>
                      </li>
                    </ul>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <GroupUpdateInput
        isOpen={isUpdateGroupModalOpen}
        onClose={() => {
          setIsUpdateGroupModalOpen(false);
          setSelectedGroup(null);
        }}
        onSuccess={fetchGroups}
        group={selectedGroup}
      />

      <GroupNewInput
        isOpen={isNewGroupModalOpen}
        onClose={() => setIsNewGroupModalOpen(false)}
        onSuccess={fetchGroups}
      />
    </div>
  );
}
