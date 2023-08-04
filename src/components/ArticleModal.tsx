'use client'

import { X } from 'lucide-react'

interface ArticleModalProps {
  showModal: any
}

export function ArticleModal({ showModal }: ArticleModalProps) {
  const closeModal = () => showModal(false)

  const createArticle = () => {
    console.log('click')
  }

  return (
    <>
      {showModal ? (
        <>
          {/* darken background */}
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-10">
            {/* modal box */}
            <div className="flex-wrap items-start rounded-lg bg-white-400 p-6 text-gray-200 shadow-xl">
              {/* title and close button row */}
              <div className="flex w-full items-center justify-between pb-3">
                <div className="mb-2 pr-36 text-3xl font-bold">Title</div>
                <button className="mb-4 pl-64" onClick={closeModal}>
                  <X size={24} />
                </button>
              </div>
              <div className="mb-2">Author</div>
              <div className="mb-2">Short description</div>
              <div className="mb-2 mt-16">Link</div>
              <button
                className="w-full rounded-lg border border-purple-500 py-2 font-bold text-purple-500"
                onClick={createArticle}
              >
                Create Article
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
