interface ArticleModalProps {
    showModal: boolean;
}

export default function ArticleModal({ showModal } : ArticleModalProps) {
    return (
        <>
        {showModal? ( 
            <>
                <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-10">        
                    <div className="bg-white-400 shadow-xl p-6 rounded-lg">
                        <div className="flex-wrap items-start pr-60">
                            <div className="flex justify-between items-center pb-3 w-full">
                                <div className="text-3xl font-bold text-[#98989A] mb-2">Title</div>
                            </div>
                            <div>
                                <div className="ml-1 text-[#98989A] mb-2">Author</div>
                                <div className="ml-1 text-[#98989A] mb-2">Short description</div>
                            </div>
                            <div className="ml-1 text-[#98989A]">Link</div>
                        </div>
                    </div>    
                </div>
            </>
        ) : null}
        </>
    )
}
