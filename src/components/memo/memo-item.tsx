import { Memo } from "@/services/memo/memo";
import { IoIosMore } from "react-icons/io";
import Image from "next/image";

interface MemoItemProps {
  memo: Memo;
  onDelete: () => void;
  onUpdate: () => void;
}

export default function MemoItem({ memo, onDelete, onUpdate }: MemoItemProps) {
  const handleAction = (e: React.MouseEvent, action: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    action();
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-lg transition-shadow">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <span className="text-sm text-base-content/70">
            {new Date(memo.created_at).toLocaleString()}
          </span>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
              <IoIosMore className="w-5 h-5 text-base-content/70" />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-[1]">
              <li>
                <button 
                  className="text-left text-base-content hover:text-primary"
                  onClick={(e) => handleAction(e, onUpdate)}
                >
                  编辑
                </button>
              </li>
              <li>
                <button 
                  className="text-left text-error hover:bg-error/10"
                  onClick={(e) => handleAction(e, onDelete)}
                >
                  删除
                </button>
              </li>
            </ul>
          </div>
        </div>

        <p className="whitespace-pre-wrap mt-2 text-base-content">{memo.text}</p>

        {memo.attach && memo.attach.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-4">
            {memo.attach.map((url, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={url}
                  alt={`附件 ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
