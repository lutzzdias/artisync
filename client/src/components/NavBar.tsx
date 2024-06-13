"use client";

import logo from "@/assets/logo.svg";
import { Modal } from "@/components/Modal";
import { FilledButton } from "@/components/buttons/FilledButton";
import { PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { Search } from "./Search";
import { useApi } from "@/utils/api";
import { Article } from "@/types";

export function NavBar() {
  const api = useApi("/article");
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  async function handleSaveArticle() {
    // TODO: get data from form
    const article: Article = {
      title: "test",
      description: "test",
      link: "www.test.com",
      author: "test",
      userId: "cd761d00-a501-4e6b-8b39-b45cdd202092",
      statusId: "69b5f24f-ba93-49d9-ad1a-0d848f8099fa",
    };

    try {
      await api.post(article);
    } catch (error) {
      throw new Error("Failed to save article");
    }
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
