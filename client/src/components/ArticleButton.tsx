"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Modal } from "./Modal";

export function ArticleButton() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSaveArticle() {
    console.log("article saved");
    closeModal();
  }

  return (
    <>
      <button
        className="flex flex-row items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-3 text-white"
        onClick={openModal}
      >
        <PlusIcon className="h-6 w-6" />
        Create article
      </button>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          handleClose={closeModal}
          handleSave={handleSaveArticle}
        />
      ) : null}
    </>
  );
}
