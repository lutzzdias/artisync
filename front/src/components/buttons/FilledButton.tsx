"use client";

import { Button } from "@headlessui/react";
import { ReactNode } from "react";

type FilledButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export function FilledButton(props: FilledButtonProps) {
  const { children, onClick } = props;

  return (
    <Button
      className="flex flex-row items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-3 text-white"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
