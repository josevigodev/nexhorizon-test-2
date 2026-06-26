import Link from 'next/link'
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer-shell px-6 pb-8 pt-4 sm:px-8 lg:px-10'>
      <div className='footer-panel max-w-7xl mx-auto'>
        <div className='grid gap-8 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-8'>
          {/* Left side */}
          <div className='space-y-4'>
            <span className='inline-flex items-center gap-3 text-secondary font-bold tracking-[0.24em] uppercase text-xs'>
              <span className='w-8 h-px bg-secondary/70'></span>
              NextHorizon
            </span>

            <h2 className='text-3xl font-black text-on-surface'>
              Una web con mas cohesion visual en todas sus rutas.
            </h2>

            <p className='max-w-2xl text-sm sm:text-base leading-relaxed text-on-surface-variant'>
              Desarrollo, diseno y producto alineados bajo un mismo sistema de
              bordes, gradientes, profundidad y navegacion persistente.
            </p>
          </div>

          {/* Links */}
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='footer-link-group'>
              <p className='footer-title'>Explorar</p>

              <Link href='/home' className='footer-link'>
                Inicio
              </Link>
              <Link href='/#services' className='footer-link'>
                Servicios
              </Link>
              <Link href='/mobile-apps' className='footer-link'>
                Aplicaciones moviles
              </Link>
            </div>

            <div className='footer-link-group'>
              <p className='footer-title'>Contacto</p>

              <Link href='/#contact' className='footer-link'>
                Iniciar proyecto
              </Link>
              <Link href='/home#about-us' className='footer-link'>
                Nosotros
              </Link>
              <Link href='/#contact' className='footer-link'>
                Hablemos
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='footer-bottom'>
          <p className='text-sm text-on-surface-variant'>
            © 2026 NextHorizon. Diseno y tecnologia con identidad.
          </p>

          <div className='flex flex-wrap gap-5'>
            <a href='#' className='footer-link footer-link-inline'>
              Politica de privacidad
            </a>
            <a href='#' className='footer-link footer-link-inline'>
              Terminos de servicio
            </a>
            <a href='#' className='footer-link footer-link-inline'>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
