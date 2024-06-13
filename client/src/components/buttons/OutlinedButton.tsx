"use client";

import { Button } from "@headlessui/react";
import { ReactNode } from "react";

type OutlinedButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export function OutlinedButton(props: OutlinedButtonProps) {
  const { children, onClick } = props;

  return (
    <Button
      className="flex flex-row items-center justify-center gap-2 rounded-xl px-4 py-3 text-gray-300 ring-1 ring-gray-300 hover:text-black hover:ring-black"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
