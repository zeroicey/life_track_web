"use client";
import { get_all_groups, Group } from "@/api/memo/group";
import { ApiResponse } from "@/api/response";
import Link from "next/link";
import { IoIosMore, IoMdAdd } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import GroupNewInput, {
  GroupNewInputRef,
} from "@/components/memo/group-new-input";

export default function MemoGroups() {
  const groupNewInputRef = useRef<GroupNewInputRef>(null);

  // 调用子组件的 openModal 方法
  const handleOpenModal = () => {
    if (groupNewInputRef.current) {
      groupNewInputRef.current.openModal();
    }
  };
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    (async () => {
      const response: ApiResponse<Group[]> = await get_all_groups();
      if (!response.status || !response.data) {
        return;
      }
      setGroups(response.data);
    })();
  }, []);

  return (
    <div className="flex flex-col p-5 gap-3 h-screen">
      {/* 高度设为屏幕高度 */}
      <GroupNewInput ref={groupNewInputRef} />
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
        <button onClick={handleOpenModal}>
          <IoMdAdd />
        </button>
      </div>
      {/* 占用剩余空间并设置滚动 */}
      <div className="flex flex-grow border w-full rounded-lg overflow-y-auto p-2">
        <table className="table min-w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th className="hidden md:table-cell">Created At</th>
              <th>Updated At</th>
              <th className="hidden md:table-cell">Description</th>
              <th className="hidden md:table-cell">Memo Number</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group: Group) => (
              <tr key={group.id}>
                <td>
                  <Link className="link link-accent" href={`/memo/${group.id}`}>
                    {group.name}
                  </Link>
                </td>
                <td className="hidden md:table-cell">{group.created_at}</td>
                <td>{group.updated_at}</td>
                <td className="hidden md:table-cell">{group.description}</td>
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
                        <a>Delete</a>
                      </li>
                      <li>
                        <a>Edit</a>
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
    </div>
  );
}
