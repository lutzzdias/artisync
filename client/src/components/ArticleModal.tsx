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
            <div className="flex w-2/5 flex-col flex-wrap items-start gap-y-6 rounded-lg bg-white-400 p-6 text-gray-200 shadow-xl">
              {/* info */}
              <div className="flex w-full flex-col gap-y-2">
                {/* title and close button row */}
                <div className="flex w-full items-center justify-between">
                  <div className="text-4xl font-bold">Title</div>
                  <button onClick={closeModal}>
                    <X size={24} />
                  </button>
                </div>
                <div className="text-sm">Author</div>
                <div>Short description</div>
                <div className="text-sm">Link</div>
              </div>

              {/* button */}
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
