export function Card() {
  return (
    <div className="flex w-64 flex-col gap-2 rounded-lg p-6 shadow">
      <h3 className="text-lg font-semibold text-gray-500">Title</h3>
      <p className="text-gray-300">Short description</p>
      <p className="font-semibold text-gray-200">Author</p>
    </div>
  )
}
