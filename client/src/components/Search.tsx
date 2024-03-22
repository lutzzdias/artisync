import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function Search() {
  return (
    <section role="search" className="flex items-center gap-2 px-4">
      <MagnifyingGlassIcon className="absolute ml-2  h-6 w-6" />
      <input
        className="w-full rounded-full bg-transparent py-3 pl-9 pr-2 ring-1 ring-inset ring-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600"
        type="search"
        placeholder="Search by author or title"
      />
    </section>
  );
}
