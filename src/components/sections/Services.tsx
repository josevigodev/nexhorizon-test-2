import Link from 'next/link'

export function Services() {
  return (
    <section id='services' className='py-32 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-20 gap-8'>
          <div className='space-y-4'>
            <span className='text-secondary font-bold tracking-[0.2em] uppercase text-sm'>
              Experiencia
            </span>
            <h2 className='text-4xl md:text-5xl font-black tracking-tight'>
              Nuestros Servicios
            </h2>
          </div>
          <p className='text-on-surface-variant max-w-md text-right'>
            Soluciones de alto rendimiento disenadas para organizaciones que no
            se conforman con lo ordinario.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          <div className='bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/25 p-8 rounded-[1.75rem] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-primary-fixed/10'>
            <div className='space-y-4'>
              <div className='w-12 h-12 bg-surface-dim/70 rounded-2xl flex items-center justify-center text-primary-fixed border border-outline-variant/20'>
                <span className='material-symbols-outlined text-3xl'>
                  terminal
                </span>
              </div>
              <h3 className='text-xl font-bold group-hover:text-primary-fixed transition-colors'>
                Desarrollo Web
              </h3>
              <p className='text-on-surface-variant text-sm leading-relaxed'>
                Arquitecturas web escalables, seguras y ultrarapidas construidas
                con React, Next.js y tecnologias nativas de la nube.
              </p>
            </div>
            <Link
              href='/web-development'
              className='mt-8 text-primary-fixed font-bold flex items-center gap-2 group/btn hover:text-secondary transition-colors text-sm'
            >
              Ver Detalles{' '}
              <span className='material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform'>
                arrow_forward
              </span>
            </Link>
          </div>

          <div className='bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/25 p-8 rounded-[1.75rem] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-primary-fixed/10'>
            <div className='space-y-4'>
              <div className='w-12 h-12 bg-surface-dim/70 rounded-2xl flex items-center justify-center text-primary-fixed border border-outline-variant/20'>
                <span className='material-symbols-outlined text-3xl'>
                  smartphone
                </span>
              </div>
              <h3 className='text-xl font-bold group-hover:text-primary-fixed transition-colors'>
                Aplicaciones Moviles
              </h3>
              <p className='text-on-surface-variant text-sm leading-relaxed'>
                Experiencias moviles nativas y multiplataforma que viven en tu
                bolsillo y definen tu estilo de vida.
              </p>
            </div>
            <Link
              href='/mobile-apps'
              className='mt-8 text-primary-fixed font-bold flex items-center gap-2 group/btn hover:text-secondary transition-colors text-sm'
            >
              Ver Detalles{' '}
              <span className='material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform'>
                arrow_forward
              </span>
            </Link>
          </div>

          <div className='bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/25 p-8 rounded-[1.75rem] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-primary-fixed/10'>
            <div className='space-y-4'>
              <div className='w-12 h-12 bg-surface-dim/70 rounded-2xl flex items-center justify-center text-primary-fixed border border-outline-variant/20'>
                <span className='material-symbols-outlined text-3xl'>
                  stylus_note
                </span>
              </div>
              <h3 className='text-xl font-bold group-hover:text-primary-fixed transition-colors'>
                Diseno UI/UX
              </h3>
              <p className='text-on-surface-variant text-sm leading-relaxed'>
                Interfaces centradas en el ser humano que combinan belleza
                estetica con flujo psicologico y precision.
              </p>
            </div>
            <Link
              href='/ui-ux-design'
              className='mt-8 text-primary-fixed font-bold flex items-center gap-2 group/btn hover:text-secondary transition-colors text-sm'
            >
              Ver Detalles{' '}
              <span className='material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform'>
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
