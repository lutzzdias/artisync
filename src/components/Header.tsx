import Image from 'next/image'
import { Plus } from 'lucide-react'

import logo from '@/assets/logo.svg'

export function Header() {
  return (
    <header className="flex flex-row justify-between items-center p-4">
      {/* logo */}
      <div className="flex flex-row font-alt text-3xl gap-x-3 font-semibold">
        <Image src={logo} alt="" width={40} height={40} />  
        ArtiSync
      </div>

      {/* actions */}
      <div className='flex flex-row gap-x-4'>
        {/* search area */}
        <section role="search">
          <form action="#" method="get">
            <label htmlFor="search">
              <input type="search" name="search" placeholder="Search by author or title" maxLength={200} />
            </label>
          </form>
        </section>
        {/* create article button */}
        <button className='bg-purple-500 text-white-500 rounded-xl py-3 px-4 align-middle justify-center flex flex-row'>
          <Plus size={16} />
          Create article
        </button>
      </div>
    </header>
  )
}