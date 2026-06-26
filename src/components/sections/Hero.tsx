import Link from 'next/link'
import TechCarousel from '../TechCarrusel'

export function Hero() {
  return (
    <section className='relative min-h-dvh md:min-h-230.25 flex items-center justify-center overflow-hidden px-8 mt-14 xs:mt-18 md:mt-0'>
      <div className='absolute inset-0 hero-gradient'></div>
      <div className='absolute top-1/4 -left-20 w-96 h-96 bg-primary-fixed/5 rounded-full blur-[100px]'></div>
      <div className='absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]'></div>
      <div className='max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center gap-10'>
        <div className='flex flex-col gap-3 xs:gap-8'>
          <h1 className='text-4xl xs:text-6xl sm:text-7xl lg:text-8xl font-black leading-[1.15] animated-gradient-text'>
            Consultoría, Diseño y Desarrollo de Productos Digitales
          </h1>
          <p className='max-w-5xl mx-auto text-lg xs:text-xl md:text-2xl text-on-surface-variant font-semibold leading-relaxed text-center'>
            Ayudamos a empresas y emprendedores a validar ideas, optimizar
            procesos y construir productos digitales que generan resultados
            reales.
          </p>
          <div className='flex flex-col xs:flex-row gap-2 xs:gap-4 pt-4 justify-center max-w-72 xs:max-w-full mx-auto'>
            <Link
              href='/#contact'
              className='px-6 py-3 xs:px-8 xs:py-4 bg-primary-fixed text-on-primary font-bold text-md xs:text-lg rounded-2xl border border-primary-fixed/20 hover:bg-primary-fixed-dim hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-xl shadow-primary-fixed/15 inline-block'
            >
              Iniciar Proyecto
            </Link>
            <Link
              href='/portfolio'
              className='px-6 py-3 xs:px-8 xs:py-4 border border-outline/70 bg-surface-container-low text-primary-fixed font-bold text-md xs:text-lg rounded-2xl hover:bg-surface-container-high hover:border-primary-fixed/40 hover:-translate-y-1 transition-all duration-300 inline-block'
            >
              Ver Estudios de Caso
            </Link>
          </div>
        </div>
        <TechCarousel />
      </div>
    </section>
  )
}
