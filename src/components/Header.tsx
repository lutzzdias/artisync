import Image from 'next/image'
import { Plus, Search } from 'lucide-react'

import logo from '@/assets/logo.svg'

export function Header() {
  return (
    <header className="flex flex-row items-center justify-between p-4">
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
            <div className="flex items-center gap-2 rounded-xl border border-solid border-gray-300 px-4">
              <Search size={24} />
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
        <button className="flex flex-row items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-3 text-white-500">
          <Plus size={24} />
          Create article
        </button>
      </div>
    </header>
  )
}
