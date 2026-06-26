import Image, { StaticImageData } from 'next/image'
import './brand-collaborations.css'
import { useMemo } from 'react'
import cubaNegocios from '@/assets/images/imgs/collaborations/cuba-negocios.png'

type BrandCollaboration = {
  name: string
  logoSrc: StaticImageData
  logoAlt?: string | null
}

const ASSETS_BASE_PATH = '/assets/images/imgs/collaborations'

const collaborations: BrandCollaboration[] = [
  {
    name: 'Cuba Negocios',
    logoSrc: cubaNegocios,
    logoAlt: 'Cuba Negocios collaboration'
  },
  {
    name: 'Cuba Negocios',
    logoSrc: cubaNegocios,
    logoAlt: 'Cuba Negocios collaboration'
  },
  {
    name: 'Cuba Negocios',
    logoSrc: cubaNegocios,
    logoAlt: 'Cuba Negocios collaboration'
  },
  {
    name: 'Cuba Negocios',
    logoSrc: cubaNegocios,
    logoAlt: 'Cuba Negocios collaboration'
  }
]

export default function BrandCollaborations() {
  const logoCollaborations = useMemo(
    () =>
      collaborations.filter((collaboration) => !!collaboration.logoAlt?.trim()),
    []
  )

  const renderedLogos = useMemo(() => {
    if (logoCollaborations.length === 0) {
      return []
    }

    const minimumRenderedItems = Math.max(logoCollaborations.length * 8, 12)

    return Array.from(
      { length: minimumRenderedItems },
      (_, index) => logoCollaborations[index % logoCollaborations.length]
    )
  }, [logoCollaborations])

  return (
    <section
      id='collaborations'
      className='brand-collaborations-shell relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10'
    >
      {' '}
      <div className='brand-collaborations-orb brand-collaborations-orb-cyan' />{' '}
      <div className='brand-collaborations-orb brand-collaborations-orb-rose' />
      <div className='relative z-10 mx-auto max-w-7xl space-y-10'>
        <div className='mx-auto max-w-3xl space-y-5 text-center'>
          <span className='inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-secondary sm:text-sm'>
            <span className='h-px w-10 bg-secondary/70' />
            Colaboraciones
          </span>

          <p className='text-base leading-relaxed text-on-surface-variant sm:text-lg'>
            Esta seccion queda lista para incorporar poco a poco los logos de
            empresas y marcas colaboradoras. Mientras tanto, el banner ya esta
            preparado para mostrar cada nueva alianza sin rehacer la interfaz.
          </p>
        </div>

        <div className='brand-collaborations-marquee'>
          {renderedLogos.map((collaboration, index) => (
            <Image
              height={200}
              width={400}
              key={index}
              src={collaboration.logoSrc! || null}
              alt={
                collaboration.logoAlt?.trim() || `${collaboration.name} logo`
              }
              className='brand-collaboration-logo'
              style={
                {
                  '--logo-index': index,
                  '--logo-count': renderedLogos.length
                } as React.CSSProperties
              }
              loading='lazy'
            />
          ))}
        </div>
      </div>
    </section>
  )
}
