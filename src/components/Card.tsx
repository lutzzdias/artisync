interface Article {
  title: string
  description: string
  author: string
}

interface CardProps {
  article: Article
}

export function Card({ article }: CardProps) {
  return (
    <div className="flex h-48 w-64 flex-col gap-2 rounded-lg p-6 shadow">
      <h3 className="text-lg font-semibold text-gray-500">{article.title}</h3>
      <p className=" text-gray-300 line-clamp-3">{article.description}</p>
      <p className="font-semibold text-gray-200">{article.author}</p>
    </div>
  )
}
