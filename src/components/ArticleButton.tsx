import { Plus } from "lucide-react";

export default function ArticleButton() {
    return (
        <>
            <button className="flex flex-row items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-3 text-white-500">
                <Plus size={24} />
                Create article
            </button>
        </>
    )
}
