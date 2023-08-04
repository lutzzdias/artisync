'use client'

interface ArticleModalProps {
  showModal: any
}

export function ArticleModal({ showModal }: ArticleModalProps) {
  const closeModal = () => {
    showModal(false)
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-10">
            <div className="rounded-lg bg-white-400 p-6 shadow-xl">
              <div className="flex-wrap items-start">
                <div className="flex w-full items-center pb-3">
                  <div className="mb-2 pr-36 text-3xl font-bold text-[#98989A]">
                    Title
                  </div>
                  <button
                    className="mb-4 pl-64 text-[#98989A]"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <div className="mb-2 text-[#98989A]">Author</div>
                  <div className="mb-2 text-[#98989A]">Short description</div>
                </div>
                <div className="mt-16">
                  <div className="mb-2 text-[#98989A]">Link</div>
                  <button
                    className="w-full rounded-lg border border-[#9C59B5] py-2 font-bold text-[#9C59B5]"
                    onClick={() => {
                      console.log('click')
                    }}
                  >
                    Create Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
