"use client";

import { Button } from "@headlessui/react";
import { ReactNode } from "react";

type TextButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export function TextButton(props: TextButtonProps) {
  const { children, onClick } = props;

  return (
    <Button
      className="flex flex-row items-center justify-center gap-2 rounded-xl px-4 py-3 text-gray-300 hover:text-black"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
