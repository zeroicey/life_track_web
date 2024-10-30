"use client";
import { groupApi } from "@/services/memo/group";
import { useRef } from "react";

interface GroupNewInputProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function GroupNewInput({
  isOpen,
  onClose,
  onSuccess,
}: GroupNewInputProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async () => {
    if (!nameRef.current?.value) {
      return;
    }

    const response = await groupApi.create({
      name: nameRef.current.value,
      description: descriptionRef.current?.value || "",
    });

    if (!response.status) {
      return;
    }

    if (nameRef.current) nameRef.current.value = "";
    if (descriptionRef.current) descriptionRef.current.value = "";

    onSuccess();
    onClose();
  };

  const handleClose = () => {
    if (nameRef.current) nameRef.current.value = "";
    if (descriptionRef.current) descriptionRef.current.value = "";
    onClose();
  };

  return (
    <dialog className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Create New Group</h3>
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
            Create
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={handleClose}>close</button>
      </form>
    </dialog>
  );
}
