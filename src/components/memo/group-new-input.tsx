import { useRef, forwardRef, useImperativeHandle } from "react";

export interface GroupNewInputRef {
  openModal: () => void;
}

const GroupNewInput = forwardRef<GroupNewInputRef>((_, ref) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  // 打开模态框的函数
  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  // 暴露 openModal 方法给父组件
  useImperativeHandle(ref, () => ({
    openModal,
  }));

  return (
    <>
      <dialog ref={modalRef} id="group-new-input" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
});

export default GroupNewInput;
