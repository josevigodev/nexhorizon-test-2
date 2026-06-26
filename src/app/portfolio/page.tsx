import CubaNegociosImg from '@/assets/images/imgs/projetcs-apps/cuba-negocios.png'
import WebProjects from '@/assets/images/imgs/web/web-projects.jpg'
import WebGym from '@/assets/images/imgs/web/web-gym.jpg'
import DesignImage from '@/assets/images/imgs/design/design.jpg'
import Image from 'next/image'

const successProjects = [
  {
    name: 'Cuba Negocios',
    category: 'Caso de exito',
    summary:
      'Una app pensada para descubrir negocios, explorar categorias y conectar usuarios con servicios reales.',
    description:
      'En este proyecto trabajamos una experiencia de descubrimiento local con geolocalizacion, categorias y una interfaz pensada para conectar usuarios con negocios reales.',
    image: CubaNegociosImg,
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=cu.cubanegocios.net&pcampaignid=web_nexthorizon',
    badges: ['Flutter', 'UX movil', 'Geolocalizacion'],
    metrics: [
      {
        value: 'Mapa',
        label: 'Descubrimiento por ubicacion'
      },
      {
        value: 'Categorias',
        label: 'Navegacion guiada'
      },
      {
        value: 'Escalable',
        label: 'Base lista para evolucionar'
      }
    ]
  },
  {
    name: 'Landing premium para captacion B2B',
    category: 'Escenario de servicio',
    summary:
      'Una web enfocada en posicionar valor, transmitir confianza y convertir visitas en oportunidades.',
    description:
      'Ideal para empresas que necesitan una presencia clara, premium y orientada a lead generation con mensajes, estructura y CTA bien definidos.',
    image: WebGym,
    badges: ['Landing', 'Conversion', 'SEO'],
    previewIcon: 'language',
    previewLabel: 'Preview web premium',
    actionLabel: 'Solicitar una web similar',
    metrics: [
      { value: 'SEO', label: 'Base preparada para visibilidad organica' },
      { value: 'CTA', label: 'Recorridos enfocados en captacion' },
      { value: 'CMS', label: 'Contenido facil de mantener' }
    ]
  },
  {
    name: 'Portal de servicios con integraciones',
    category: 'Escenario de servicio',
    summary:
      'Una experiencia web mas robusta para presentar servicios, captar leads y operar con mayor orden.',
    description:
      'Pensado para marcas que necesitan una web con varias secciones, formularios, integraciones y una estructura lista para evolucionar.',
    image: WebProjects,
    badges: ['Portal', 'Integraciones', 'Escalable'],
    previewIcon: 'dashboard',
    previewLabel: 'Portal modular',
    actionLabel: 'Quiero este tipo de portal',
    metrics: [
      { value: 'Forms', label: 'Captura organizada de contactos' },
      { value: 'Analytics', label: 'Seguimiento de rendimiento' },
      { value: 'Modular', label: 'Base pensada para crecer' }
    ]
  },
  {
    name: 'Rediseño de onboarding para producto SaaS',
    category: 'Escenario de servicio',
    summary:
      'Una experiencia pensada para reducir abandono y ayudar al usuario a activar valor mas rapido.',
    description:
      'En este tipo de proyecto ordenamos pantallas, mensajes y decisiones visuales para que el usuario entienda que hacer desde el primer minuto.',
    image: DesignImage,
    badges: ['Onboarding', 'UX', 'Activation'],
    previewIcon: 'deployed_code_history',
    previewLabel: 'Flujo de onboarding',
    actionLabel: 'Quiero un rediseño similar',
    metrics: [
      { value: 'Flow', label: 'Recorridos definidos con menos friccion' },
      { value: 'UI Kit', label: 'Base visual reutilizable' },
      { value: 'Prototype', label: 'Validacion antes de desarrollo' }
    ]
  }
]

export default function PortfolioPage() {
  return (
    <section className='mobile-apps-page relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10 mt-10'>
      <div className='max-w-7xl mx-auto relative z-10 space-y-24 lg:space-y-32'>
        <section id='showcase' className='space-y-8'>
          <div className='space-y-4'>
            <span className='text-secondary font-bold tracking-[0.24em] uppercase text-xs sm:text-sm'>
              Proyectos de exito
            </span>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black leading-tight'>
              Casos reales del tipo de software que desarrollamos.
            </h2>
            <p className='max-w-3xl text-base sm:text-lg leading-relaxed text-on-surface-variant'>
              Aqui mostramos proyectos construidos dentro de nuestro servicio.
              Puedes abrir cada uno para ver su detalle, enfoque y tipo de
              solucion aplicada.
            </p>
          </div>
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {successProjects.map((project) => (
              <article
                key={project.name}
                // *ngFor="let project of successProjects"
                className='mobile-apps-project-card group rounded-[1.75rem] border border-outline-variant/30 bg-surface-container-high/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary-fixed/35'
              >
                <div className='overflow-hidden rounded-[1.35rem] border border-outline/40 bg-surface-container-low'>
                  <Image
                    src={project.image || null}
                    alt={project.name}
                    className='aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105'
                    loading='lazy'
                  />
                </div>

                <div className='mt-5 space-y-4'>
                  <p className='text-xs font-bold uppercase tracking-[0.24em] text-primary-fixed'>
                    {project.category}
                  </p>
                  <h3 className='text-2xl font-black text-on-surface'>
                    {project.name}
                  </h3>
                  <p className='text-sm leading-relaxed text-on-surface-variant'>
                    {project.summary}
                  </p>

                  <div className='flex flex-wrap gap-2'>
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        // *ngFor="let badge of project.badges"
                        className='rounded-full border border-primary-fixed/20 bg-primary-fixed/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-fixed'
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <button
                    type='button'
                    className='inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-primary-fixed transition-colors duration-300 hover:text-secondary'
                    // (click)="openProject(project)"
                  >
                    Ver proyecto
                    <span className='material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1'>
                      arrow_forward
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
