"use client";

import { ReactNode } from "react";

type FilledButtonProps = {
  children?: ReactNode;
  onClick: () => void;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
};

export function FilledButton(props: FilledButtonProps) {
  const { children, onClick, prefixIcon, suffixIcon } = props;

  return (
    <>
      <button
        className="flex flex-row items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-3 text-white"
        onClick={onClick}
      >
        {prefixIcon}
        {children}
        {suffixIcon}
      </button>
    </>
  );
}
