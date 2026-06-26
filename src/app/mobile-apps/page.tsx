import Image from 'next/image'
import Link from 'next/link'
import CubaNegociosImg from '@/assets/images/imgs/projetcs-apps/cuba-negocios.png'
import './mobile-apps.css'

const stats = [
  {
    value: 'Flutter',
    label: 'Base de desarrollo',
    description: 'Construimos apps con un solo codigo base para Android y iOS.'
  },
  {
    value: 'iOS + Android',
    label: 'Publicacion multiplataforma',
    description:
      'Pensamos el producto para llegar a ambas plataformas sin duplicar esfuerzos.'
  },
  {
    value: 'UI/UX',
    label: 'Experiencia cuidada',
    description:
      'Diseñamos flujos claros, visuales consistentes y pantallas listas para escalar.'
  }
]

const benefits = [
  {
    icon: 'dashboard_customize',
    title: 'Interfaces con identidad',
    description:
      'Diseñamos aplicaciones moviles que se sienten propias de tu marca y no como una plantilla generica.'
  },
  {
    icon: 'bolt',
    title: 'Flutter para iterar rapido',
    description:
      'Trabajamos con Flutter para construir, probar y evolucionar el producto con mayor velocidad.'
  },
  {
    icon: 'shield_locked',
    title: 'Arquitectura solida',
    description:
      'La aplicacion se construye con una base preparada para crecer, integrar APIs y sumar modulos.'
  },
  {
    icon: 'travel_explore',
    title: 'Flujos pensados para conversion',
    description:
      'Cada recorrido busca reducir friccion y ayudar al usuario a completar acciones importantes.'
  },
  {
    icon: 'deployed_code',
    title: 'Una sola base para dos plataformas',
    description:
      'Flutter nos permite entregar una experiencia consistente en Android y iOS desde un mismo desarrollo.'
  },
  {
    icon: 'support_agent',
    title: 'Acompanamiento de producto',
    description:
      'No solo desarrollamos la app: te ayudamos a aterrizar alcance, prioridades y siguientes versiones.'
  }
]

const deliveryPillars = [
  'Flutter para Android y iOS desde una sola base',
  'UI movil alineada con tu marca y tu objetivo',
  'Arquitectura lista para escalar e integrar nuevas funciones'
]

const process = [
  {
    step: '01',
    title: 'Descubrimos el producto',
    description:
      'Definimos objetivos, usuarios, alcance y prioridades antes de diseñar y desarrollar.'
  },
  {
    step: '02',
    title: 'Diseñamos y construimos en Flutter',
    description:
      'Trabajamos interfaz, experiencia y desarrollo en una sola direccion para Android y iOS.'
  },
  {
    step: '03',
    title: 'Preparamos lanzamiento y crecimiento',
    description:
      'Dejamos una base lista para publicar, iterar y seguir ampliando el producto.'
  }
]

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
  }
]

export default function MobileAppsPage() {
  return (
    <section className='mobile-apps-page relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10'>
      <div className='mobile-apps-orb mobile-apps-orb-cyan'></div>
      <div className='mobile-apps-orb mobile-apps-orb-rose'></div>
      <div className='mobile-apps-grid'></div>

      <div className='max-w-7xl mx-auto relative z-10 space-y-24 lg:space-y-32'>
        <section className='grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]'>
          <div className='space-y-8'>
            <div className='space-y-5'>
              <span className='inline-flex items-center gap-3 text-secondary font-bold tracking-[0.24em] uppercase text-xs sm:text-sm'>
                <span className='w-10 h-px bg-secondary/70'></span>
                Servicio
              </span>

              <div className='space-y-4'>
                <p className='text-primary-fixed font-semibold uppercase tracking-[0.35em] text-xs sm:text-sm'>
                  Desarrollo de aplicaciones moviles
                </p>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight'>
                  Creamos aplicaciones moviles en Flutter con enfoque de
                  producto, diseno y crecimiento.
                </h1>
                <p className='max-w-2xl text-base sm:text-lg text-on-surface-variant leading-relaxed'>
                  Este servicio esta pensado para marcas y negocios que
                  necesitan una app funcional, bien diseñada y lista para
                  publicarse en Android y iOS. Trabajamos con Flutter para
                  acelerar desarrollo, mantener consistencia visual y dejar una
                  base preparada para evolucionar.
                </p>
              </div>
            </div>

            <div className='flex flex-wrap gap-4'>
              <Link
                className='inline-flex items-center gap-2 rounded-full bg-primary-fixed px-6 py-3 text-sm font-bold text-on-primary transition-transform duration-300 hover:-translate-y-1'
                href='/contact'
              >
                Solicitar servicio
                <span className='material-symbols-outlined text-base'>
                  north_east
                </span>
              </Link>

              <button
                type='button'
                className='inline-flex items-center gap-2 rounded-full border border-outline/70 bg-surface-container-high/70 px-6 py-3 text-sm font-bold text-on-surface transition-colors duration-300 hover:border-primary-fixed hover:text-primary-fixed'
                // (click)="scrollToSuccessProjects()"
              >
                Ver caso de exito
                <span className='material-symbols-outlined text-base'>
                  arrow_downward
                </span>
              </button>
            </div>

            <div className='grid gap-4 sm:grid-cols-3'>
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className='mobile-apps-stat rounded-[1.75rem] border border-outline-variant/40 bg-surface-container-low/80 p-5 shadow-xl backdrop-blur-sm'
                >
                  <div className='text-2xl font-black text-primary-fixed'>
                    {stat.value}
                  </div>
                  <h2 className='mt-4 text-sm font-bold uppercase tracking-[0.22em] text-on-surface'>
                    {stat.label}
                  </h2>
                  <p className='mt-3 text-sm leading-relaxed text-on-surface-variant'>
                    {stat.description}
                  </p>
                </article>
              ))}
              {/* <article
            *ngFor="let stat of stats"
            className="mobile-apps-stat rounded-[1.75rem] border border-outline-variant/40 bg-surface-container-low/80 p-5 shadow-xl backdrop-blur-sm"
          >
            <div className="text-2xl font-black text-primary-fixed">{{ stat.value }}</div>
            <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-on-surface">
              {{ stat.label }}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{{ stat.description }}</p>
          </article> */}
            </div>
          </div>

          <div className='mobile-apps-hero-card rounded-4xl border border-outline-variant/50 bg-surface-container-lowest/90 p-4 sm:p-6 shadow-2xl backdrop-blur-md'>
            <div className='mobile-apps-hero-shell rounded-[1.6rem] border border-outline/50 bg-surface-container-lowest/95 p-5 sm:p-7'>
              <div className='flex items-center justify-between gap-4 border-b border-outline/50 pb-5'>
                <div>
                  <p className='text-xs uppercase tracking-[0.32em] text-secondary'>
                    Servicio movil
                  </p>
                  <h2 className='mt-2 text-2xl font-black text-on-surface'>
                    Apps modernas con Flutter
                  </h2>
                </div>
                <div className='rounded-full border border-primary-fixed/30 bg-primary-fixed/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed'>
                  Android + iOS
                </div>
              </div>

              <div className='mobile-apps-hero-visual mt-6'>
                <div className='mobile-apps-phone-frame'>
                  <Image
                    src={successProjects[0].image || null}
                    alt={successProjects[0].name}
                    className='h-full w-full object-cover'
                    loading='lazy'
                  />
                </div>

                <div className='mobile-apps-floating-card mobile-apps-floating-card-top'>
                  <span className='material-symbols-outlined text-lg text-tertiary-fixed'>
                    rocket_launch
                  </span>
                  <div>
                    <p className='text-xs uppercase tracking-[0.24em] text-on-surface-variant'>
                      Framework
                    </p>
                    <p className='text-sm font-semibold text-on-surface'>
                      Flutter para desarrollo agil y consistente
                    </p>
                  </div>
                </div>

                <div className='mobile-apps-floating-card mobile-apps-floating-card-bottom'>
                  <span className='material-symbols-outlined text-lg text-primary-fixed'>
                    widgets
                  </span>
                  <div>
                    <p className='text-xs uppercase tracking-[0.24em] text-on-surface-variant'>
                      Entrega
                    </p>
                    <p className='text-sm font-semibold text-on-surface'>
                      Base lista para crecer, iterar y publicar
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-6 grid gap-3 sm:grid-cols-3'>
                {deliveryPillars.map((pillar) => (
                  <div
                    key={pillar}
                    className='rounded-[1.25rem] border border-outline/50 bg-surface-container-low px-4 py-4 text-sm leading-relaxed text-on-surface-variant'
                  >
                    {pillar}
                  </div>
                ))}
                {/* <div
              *ngFor="let pillar of deliveryPillars"
              className="rounded-[1.25rem] border border-outline/50 bg-surface-container-low px-4 py-4 text-sm leading-relaxed text-on-surface-variant"
            >
              {{ pillar }}
            </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className='grid gap-10 lg:grid-cols-[0.82fr_1.18fr]'>
          <div className='space-y-5'>
            <span className='text-secondary font-bold tracking-[0.24em] uppercase text-xs sm:text-sm'>
              Por que elegirnos
            </span>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black leading-tight'>
              Un servicio movil pensado para verse bien, funcionar bien y crecer
              contigo.
            </h2>
            <p className='max-w-xl text-base sm:text-lg leading-relaxed text-on-surface-variant'>
              No se trata solo de programar una app. Definimos experiencia,
              estructura, tecnologia y una direccion visual coherente para que
              el producto llegue fuerte al mercado desde su primera version.
            </p>
          </div>

          <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className='mobile-apps-benefit group rounded-[1.75rem] border border-outline-variant/30 bg-surface-container-high/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary-fixed/35'
              >
                <div className='mobile-apps-benefit-icon'>
                  <span className='material-symbols-outlined text-[1.7rem]'>
                    {benefit.icon}
                  </span>
                </div>
                <h3 className='mt-6 text-xl font-bold text-on-surface transition-colors duration-300 group-hover:text-primary-fixed'>
                  {benefit.title}
                </h3>
                <p className='mt-4 text-sm leading-relaxed text-on-surface-variant'>
                  {benefit.description}
                </p>
              </article>
            ))}
            {/* <article
          *ngFor="let benefit of benefits"
          className="mobile-apps-benefit group rounded-[1.75rem] border border-outline-variant/30 bg-surface-container-high/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary-fixed/35"
        >
          <div className="mobile-apps-benefit-icon">
            <span className="material-symbols-outlined text-[1.7rem]">{{ benefit.icon }}</span>
          </div>
          <h3 className="mt-6 text-xl font-bold text-on-surface transition-colors duration-300 group-hover:text-primary-fixed">
            {{ benefit.title }}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
            {{ benefit.description }}
          </p>
        </article> */}
          </div>
        </section>

        <section id='showcase' className='space-y-8'>
          <div className='space-y-4'>
            <span className='text-secondary font-bold tracking-[0.24em] uppercase text-xs sm:text-sm'>
              Proyectos de exito
            </span>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black leading-tight'>
              Casos reales del tipo de aplicaciones moviles que desarrollamos.
            </h2>
            <p className='max-w-3xl text-base sm:text-lg leading-relaxed text-on-surface-variant'>
              Aqui mostramos proyectos construidos dentro de nuestro servicio
              movil. Puedes abrir cada uno para ver su detalle, enfoque y tipo
              de solucion aplicada.
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

        <section className='grid gap-8 lg:grid-cols-[1fr_0.9fr]'>
          <article className='mobile-apps-cta rounded-4xl border border-primary-fixed/15 bg-primary-container/60 p-8 shadow-2xl'>
            <span className='text-secondary font-bold tracking-[0.24em] uppercase text-xs sm:text-sm'>
              Solicitar servicio
            </span>
            <h2 className='mt-5 max-w-2xl text-3xl sm:text-4xl font-black leading-tight'>
              Si necesitas una app movil para tu negocio, la construimos contigo
              desde cero.
            </h2>
            <p className='mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-on-surface-variant'>
              Ya sea una app de servicios, ecommerce, directorio, reservas o
              gestion interna, trabajamos una solucion movil a medida con
              Flutter, enfocada en usabilidad, rendimiento y escalabilidad.
            </p>
            <Link
              className='mt-8 inline-flex items-center gap-2 rounded-full bg-primary-fixed px-6 py-3 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1'
              href='/#contact'
            >
              Solicitar servicio
              <span className='material-symbols-outlined text-base'>
                call_made
              </span>
            </Link>
          </article>

          <div className='space-y-4'>
            {process.map((item) => (
              <article
                key={item.title}
                // *ngFor="let item of process"
                className='rounded-[1.7rem] border border-outline-variant/30 bg-surface-container-high/80 p-6 shadow-xl backdrop-blur-sm'
              >
                <div className='text-sm font-bold uppercase tracking-[0.3em] text-primary-fixed'>
                  {item.step}
                </div>
                <h3 className='mt-4 text-2xl font-black text-on-surface'>
                  {item.title}
                </h3>
                <p className='mt-4 text-sm sm:text-base leading-relaxed text-on-surface-variant'>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* <div
    *ngIf="selectedProject as project"
    className="mobile-apps-modal fixed inset-0 z-[80] flex items-center justify-center px-4 py-8"
    role="dialog"
    aria-modal="true"
    aria-label="Detalle del proyecto"
  >
    <button
      type="button"
      className="mobile-apps-modal-backdrop absolute inset-0"
      aria-label="Cerrar dialogo"
      (click)="closeProject()"
    ></button>

    <div className="mobile-apps-modal-panel relative z-10 max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-outline/50 bg-surface-container-lowest/95 p-4 shadow-2xl backdrop-blur-md sm:p-6">
      <button
        type="button"
        className="absolute right-5 top-5 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline/50 bg-surface-container-lowest text-on-surface transition-colors duration-300 hover:border-primary-fixed/35 hover:text-primary-fixed"
        aria-label="Cerrar proyecto"
        (click)="closeProject()"
      >
        <span className="material-symbols-outlined">close</span>
      </button>

      <section className="mobile-apps-showcase grid gap-10 rounded-[2rem] border border-outline/50 bg-surface-container-lowest/95 p-4 shadow-2xl backdrop-blur-md lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
        <div className="mobile-apps-showcase-media rounded-[1.6rem] border border-outline/40 bg-surface-container-lowest p-5">
          <div className="flex flex-wrap gap-3">
            <span
              *ngFor="let badge of project.badges"
              className="rounded-full border border-primary-fixed/20 bg-primary-fixed/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed"
            >
              {{ badge }}
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-outline/40 bg-surface-container-low">
            <img
              [src]="project.image"
              [alt]="project.name"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-6 self-center">
          <div className="space-y-4">
            <span className="text-secondary font-bold tracking-[0.24em] uppercase text-xs sm:text-sm">Proyecto de exito</span>
            <p className="text-primary-fixed font-semibold uppercase tracking-[0.28em] text-xs">
              {{ project.category }}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
              {{ project.name }}
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              {{ project.summary }}
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-on-surface-variant/90">
              {{ project.description }}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <article
              *ngFor="let metric of project.metrics"
              className="rounded-[1.35rem] border border-outline/40 bg-surface-container-low px-5 py-5"
            >
              <div className="text-lg font-black text-tertiary-fixed">{{ metric.value }}</div>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{{ metric.label }}</p>
            </article>
          </div>

          <div className="pt-2">
            <a
              [href]="project.playStoreUrl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary-fixed px-6 py-3 text-sm font-bold text-on-primary transition-transform duration-300 hover:-translate-y-1"
            >
              Descargar en Google Play
              <span className="material-symbols-outlined text-base">south_east</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div> */}
    </section>
  )
}
