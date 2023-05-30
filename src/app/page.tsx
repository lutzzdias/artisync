import { Card } from '@/components/Card'

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      {/* header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Articles</h2>
        <h4 className="text-sm">
          Sort by:{' '}
          <button className="text-gray-300 hover:text-gray-200" type="button">
            Author
          </button>
        </h4>
      </div>

      {/* grid */}
      <div className="grid grid-cols-4 gap-8">
        <Card
          article={{
            title: 'Lorem ipsum',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc sapien ultricies nunc, vitae ultricies nisl nunc eget nisl. Donec auctor, nisl vitae tincidunt ultricies, nunc sapien ultricies nunc, vitae ultricies nisl nunc eget nisl.',
            author: 'John Doe',
          }}
        />
      </div>
    </div>
  )
}
