'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'
import { ArticleModal } from './ArticleModal'

export function ArticleButton() {
  const [showModal, setShowModal] = useState(false)

  const openCreationModal = () => setShowModal(true)

  return (
    <>
      <button
        className="flex flex-row items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-3 text-white-500"
        onClick={openCreationModal}
      >
        <Plus size={24} />
        Create article
      </button>
      {showModal ? <ArticleModal showModal={setShowModal} /> : null}
    </>
  )
}
