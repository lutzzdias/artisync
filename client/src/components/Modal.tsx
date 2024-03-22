import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function Modal({
  isOpen,
  handleClose,
  handleSave,
}: {
  isOpen: boolean;
  handleClose: () => void;
  handleSave: () => void;
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className="fixed inset-0 overflow-y-auto p-4 pt-[32vh]"
    >
      {/* backdrop */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <Dialog.Panel className="relative mx-auto flex max-w-screen-md flex-col gap-2 rounded-xl bg-white p-6 shadow-2xl">
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Title"
            className="w-full text-4xl font-bold outline-none placeholder:text-gray-200"
          />
          <button onClick={handleClose}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <input
          type="text"
          placeholder="Author"
          className="w-full text-sm outline-none placeholder:text-gray-200"
        />
        <textarea
          placeholder="Short description"
          className="h-24 w-full resize-none outline-none placeholder:text-gray-200"
        />
        <input
          type="url"
          placeholder="Link to article"
          className="w-full outline-none placeholder:text-gray-200"
        />
        <button
          onClick={handleSave}
          className="w-full rounded-xl p-3 text-purple-500 ring-1 ring-inset ring-purple-500"
        >
          Create article
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
