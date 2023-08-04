import { Card } from '@/components/Card'

export function Grid() {
  return (
    <div className="grid grid-cols-4 gap-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <Card
          key={index}
          article={{
            title: 'Lorem ipsum',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc sapien ultricies nunc, vitae ultricies nisl nunc eget nisl. Donec auctor, nisl vitae tincidunt ultricies, nunc sapien ultricies nunc, vitae ultricies nisl nunc eget nisl.',
            author: 'John Doe',
          }}
        />
      ))}
    </div>
  )
}
