"use client";

import logo from "@/assets/logo.svg";
import { Modal } from "@/components/Modal";
import { FilledButton } from "@/components/buttons/FilledButton";
import { PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { Search } from "./Search";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleSaveArticle() {
    console.log("article saved");
    handleCloseModal();
  }

  return (
    <>
      <header className="mb-6 flex flex-row items-center justify-between">
        {/* logo */}
        <div className="flex flex-row gap-3 font-alt text-3xl font-semibold">
          <Image src={logo} alt="" width={40} height={40} />
          ArtiSync
        </div>

        {/* actions */}
        <div className="flex flex-row gap-4">
          <Search />
          <FilledButton
            onClick={openModal}
            prefixIcon={<PlusIcon className="h-6 w-6" />}
          >
            Create article
          </FilledButton>
        </div>
      </header>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          handleClose={handleCloseModal}
          handleSave={handleSaveArticle}
        />
      )}
    </>
  );
}
