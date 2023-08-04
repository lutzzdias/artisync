"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export default function ArticleButton() {
    const [showModal, setShowModal] = useState(false);

    const createArticle = () => {
        setShowModal(true);
        console.log('aaaaa')
    }

    return (
        <>
            <button 
                className="flex flex-row items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-3 text-white-500"
                onClick={createArticle}
            >
                <Plus size={24} />
                Create article
            </button>
        </>
    )
}
