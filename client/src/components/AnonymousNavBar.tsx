"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/logo.svg";
import { FilledButton } from "@/components/buttons/FilledButton";

export function AnonymousNavBar() {
  const path = usePathname();

  return (
    <>
      <header className="absolute flex flex-row items-center justify-between">
        {/* logo */}
        <div className="flex flex-row gap-3 font-alt text-3xl font-semibold">
          <Image src={logo} alt="" width={40} height={40} />
          ArtiSync
        </div>

        {/* actions */}
        {path == "/landing" && (
          <div className="flex flex-row gap-4">
            <Link href="/auth/sign-in">
              <FilledButton onClick={() => {}}>
                Sign in
                <ArrowRightIcon width={16} height={16} />
              </FilledButton>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
