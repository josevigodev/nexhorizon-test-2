import { technologies } from '@/mocks/technologies'
import Image from 'next/image'

export default function TechCarousel() {
  const items = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies
  ]

  return (
    <div className='overflow-hidden py-4'>
      <div className='group'>
        <div className='flex w-max animate-scroll'>
          {items.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className='mx-8 flex items-center justify-center'
            >
              <Image
                title={tech.name}
                src={tech.Icon}
                alt={tech.name}
                width={64}
                height={64}
                className='h-16 w-16'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
