import logo from "@/assets/logo.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ArticleButton } from "./ArticleButton";

export function NavBar() {
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
          {/* search area */}
          <section role="search">
            <form action="#" method="get" className="w-80">
              <div className="flex items-center gap-2 rounded-full border border-solid border-gray-300 px-4">
                <MagnifyingGlassIcon className="h-6 w-6" />
                <input
                  className="w-full bg-transparent py-3 focus:outline-none"
                  type="search"
                  placeholder="Search by author or title"
                  maxLength={200}
                />
              </div>
            </form>
          </section>
          {/* create article button */}
          <ArticleButton />
        </div>
      </header>
    </>
  );
}
