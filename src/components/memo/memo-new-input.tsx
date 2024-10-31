"use client";
import { useRef, useState } from "react";
import { memoApi } from "@/services/memo/memo";
import Modal from "../common/modal";
import { IoMdImage } from "react-icons/io";

interface MemoNewInputProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  groupId: string;
}

export default function MemoNewInput({
  isOpen,
  onClose,
  onSuccess,
  groupId,
}: MemoNewInputProps) {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [attachments, setAttachments] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!textRef.current?.value) {
      alert("请输入备忘录内容");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await memoApi.create({
        text: textRef.current.value,
        group_id: groupId,
        attach: attachments,
      });

      if (!response.status) {
        alert(response.message);
        return;
      }

      if (textRef.current) textRef.current.value = "";
      setAttachments([]);
      onSuccess();
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (textRef.current) textRef.current.value = "";
    setAttachments([]);
    onClose();
  };

  // TODO: 实现图片上传功能
  const handleImageUpload = () => {
    alert("图片上传功能开发中...");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="新建备忘录"
      footer={
        <>
          <button className="btn" onClick={handleClose}>
            取消
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "创建中..." : "创建"}
          </button>
        </>
      }
    >
      <div className="form-control w-full gap-4">
        <div>
          <label className="label">
            <span className="label-text">内容</span>
          </label>
          <textarea
            ref={textRef}
            className="textarea textarea-bordered w-full h-32"
            placeholder="在这里输入备忘录内容..."
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">附件</span>
            <button
              className="btn btn-ghost btn-circle"
              onClick={handleImageUpload}
            >
              <IoMdImage className="w-5 h-5" />
            </button>
          </label>
          {attachments.length > 0 ? (
            <div className="grid grid-cols-3 gap-2">
              {attachments.map((url, index) => (
                <div
                  key={index}
                  className="relative aspect-square bg-base-200 rounded-lg"
                >
                  {/* TODO: 显示上传的图片预览 */}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-base-200 rounded-lg text-base-content/70">
              还没有上传任何附件
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
} 