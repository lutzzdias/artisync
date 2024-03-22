import logo from "@/assets/logo.svg";
import Image from "next/image";
import { ArticleButton } from "./ArticleButton";
import { Search } from "./Search";

export function NavBar() {
  return (
    <header className="mb-6 flex flex-row items-center justify-between">
      {/* logo */}
      <div className="flex flex-row gap-3 font-alt text-3xl font-semibold">
        <Image src={logo} alt="" width={40} height={40} />
        ArtiSync
      </div>

      {/* actions */}
      <div className="flex flex-row gap-4">
        <Search />
        <ArticleButton />
      </div>
    </header>
  );
}
