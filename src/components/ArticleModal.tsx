"use client";

import { useState } from "react";

interface ArticleModalProps {
    showModal: any;
}

export default function ArticleModal({ showModal } : ArticleModalProps) {

    const closeModal = () => {
        showModal(false);
    }

    return (
        <>
        {showModal? ( 
            <>
                <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-10">        
                    <div className="bg-white-400 shadow-xl p-6 rounded-lg">
                        <div className="flex-wrap items-start">
                            <div className="flex items-center pb-3 w-full">
                                <div className="text-3xl font-bold text-[#98989A] mb-2 pr-36">Title</div>
                                <button className="text-[#98989A] pl-64 mb-4" onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <div className="text-[#98989A] mb-2">Author</div>
                                <div className="text-[#98989A] mb-2">Short description</div>
                            </div>
                            <div className="mt-16">
                                <div className="text-[#98989A] mb-2">Link</div>
                                <button 
                                    className="border border-[#9C59B5] font-bold text-[#9C59B5] w-full rounded-lg py-2"
                                    onClick={() => {console.log("click")}}
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
