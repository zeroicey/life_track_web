"use client";
import { Group, groupApi } from "@/services/memo/group";
import { useEffect, useRef } from "react";

interface GroupUpdateInputProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  group: Group | null;
}

export default function GroupUpdateInput({
  isOpen,
  onClose,
  onSuccess,
  group,
}: GroupUpdateInputProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (group && isOpen) {
      if (nameRef.current) nameRef.current.value = group.name;
      if (descriptionRef.current) descriptionRef.current.value = group.description;
    }
  }, [group, isOpen]);

  const handleSubmit = async () => {
    if (!nameRef.current?.value || !group) {
      return;
    }

    const response = await groupApi.update(group._id, {
      name: nameRef.current.value,
      description: descriptionRef.current?.value || "",
    });

    if (!response.status) {
      return;
    }

    onSuccess();
    onClose();
  };

  const handleClose = () => {
    if (nameRef.current) nameRef.current.value = '';
    if (descriptionRef.current) descriptionRef.current.value = '';
    onClose();
  };

  return (
    <dialog className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Update Group</h3>
        <div className="py-4 flex flex-col gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Group Name</span>
            </label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              ref={descriptionRef}
              className="textarea textarea-bordered h-24"
              placeholder="Description here"
            ></textarea>
          </div>
        </div>
        <div className="modal-action">
          <button className="btn" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={handleClose}>close</button>
      </form>
    </dialog>
  );
}
