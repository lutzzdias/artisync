"use client";

import { useState } from "react";

interface ArticleModalProps {
    showModal: boolean;
}

export default function ArticleModal({ showModal } : ArticleModalProps) {

    const [isVisible, setIsVisible] = useState(showModal);

    const closeModal = () => {
        setIsVisible(!showModal);
        console.log(!showModal)
    }

    return (
        <>
        {isVisible? ( 
            <>
                <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-10">        
                    <div className="bg-white-400 shadow-xl p-6 rounded-lg">
                        <div className="flex-wrap items-start">
                            <div className="flex items-center pb-3 w-full">
                                <div className="text-3xl font-bold text-[#98989A] mb-2">Title</div>
                                <button className="text-[#98989A] pl-64 mb-4" onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
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
