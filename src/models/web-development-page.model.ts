import { ServicePageModel } from './service-page.model'
import WebProjects from '@/assets/images/imgs/web/web-projects.jpg'
import WebGym from '@/assets/images/imgs/web/web-gym.jpg'

export const WEB_DEVELOPMENT_PAGE: ServicePageModel = {
  slug: 'web-development',
  serviceLabel: 'Desarrollo web',
  heroTitle:
    'Construimos experiencias web modernas con enfoque en rendimiento, conversion y escalabilidad.',
  heroDescription:
    'Este servicio esta pensado para negocios que necesitan una presencia digital solida, rapida y lista para crecer. Diseñamos y desarrollamos sitios, plataformas y productos web que convierten mejor y se sostienen tecnicamente en el tiempo.',
  primaryCtaLabel: 'Solicitar servicio',
  secondaryCtaLabel: 'Ver proyectos tipo',
  whyTitle:
    'Desarrollo web pensado para verse premium, cargar rapido y adaptarse al negocio.',
  whyDescription:
    'No se trata solo de lanzar una pagina. Definimos arquitectura, experiencia, estructura de contenido y base tecnica para que tu producto web tenga impacto desde el primer dia.',
  showcaseTitle:
    'Escenarios reales del tipo de productos web que podemos construir contigo.',
  showcaseDescription:
    'Estas referencias muestran el tipo de solucion, complejidad y resultado que abordamos en proyectos web con foco comercial y de producto.',
  ctaTitle:
    'Si necesitas una web que represente bien tu marca y ademas empuje resultados, la construimos contigo.',
  ctaDescription:
    'Ya sea una landing premium, una web corporativa, un portal de servicios o una plataforma mas robusta, trabajamos una solucion clara, escalable y alineada con tus objetivos.',
  stats: [
    {
      value: 'Next.js / Angular',
      label: 'Base de desarrollo',
      description:
        'Elegimos la arquitectura web adecuada segun el objetivo del producto.'
    },
    {
      value: 'SEO + Performance',
      label: 'Visibilidad y velocidad',
      description:
        'Pensamos la web para cargar rapido, posicionar mejor y convertir mas.'
    },
    {
      value: 'Responsive',
      label: 'Experiencia consistente',
      description:
        'Cada pantalla se diseña y desarrolla para desktop, tablet y movil.'
    }
  ],
  benefits: [
    {
      icon: 'language',
      title: 'Sitios con presencia de marca',
      description:
        'La experiencia visual comunica valor sin sentirse generica ni improvisada.'
    },
    {
      icon: 'speed',
      title: 'Rendimiento real',
      description:
        'Reducimos friccion tecnica para que la web cargue rapido y se sienta fluida.'
    },
    {
      icon: 'conversion_path',
      title: 'Estructura pensada para conversion',
      description:
        'Cada bloque ayuda a orientar al usuario hacia la accion que importa.'
    },
    {
      icon: 'dns',
      title: 'Arquitectura lista para crecer',
      description:
        'La base tecnica queda preparada para sumar integraciones, paneles o nuevas vistas.'
    },
    {
      icon: 'settings_ethernet',
      title: 'Integraciones y automatizacion',
      description:
        'Conectamos formularios, CRMs, analytics y servicios externos cuando el negocio lo necesita.'
    },
    {
      icon: 'verified',
      title: 'Mantenimiento mas simple',
      description:
        'Priorizamos una estructura clara para que la web evolucione sin dolor tecnico.'
    }
  ],
  deliveryPillars: [
    'Arquitectura web alineada con conversion, contenido y crecimiento',
    'UI responsive con foco en claridad, velocidad y consistencia',
    'Base lista para SEO, integraciones y futuras expansiones'
  ],
  process: [
    {
      step: '01',
      title: 'Aterrizamos objetivos y arquitectura',
      description:
        'Definimos alcance, estructura, prioridades y tipo de experiencia antes de construir.'
    },
    {
      step: '02',
      title: 'Diseñamos y desarrollamos en paralelo',
      description:
        'Trabajamos contenido, interfaz y base tecnica en una sola direccion clara.'
    },
    {
      step: '03',
      title: 'Preparamos salida y optimizacion',
      description:
        'Entregamos una web lista para publicar, medir resultados y seguir iterando.'
    }
  ],
  successProjects: [
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
    }
  ],
  heroVisual: {
    panelEyebrow: 'Servicio web',
    panelTitle:
      'Experiencias web modernas para marcas que quieren verse y funcionar mejor',
    panelBadge: 'Web premium',
    image: WebProjects,
    imageAlt: 'Vista principal de un proyecto de desarrollo web',
    chips: ['Next.js', 'Angular', 'SEO', 'Analytics', 'APIs', 'CMS'],
    cards: [
      {
        icon: 'bolt',
        label: 'Performance',
        text: 'Carga rapida y estructura optimizada para mejores recorridos.'
      },
      {
        icon: 'dashboard_customize',
        label: 'UI modular',
        text: 'Bloques claros que facilitan escalar la experiencia.'
      },
      {
        icon: 'hub',
        label: 'Integraciones',
        text: 'Conexiones con formularios, CRM y servicios externos.'
      },
      {
        icon: 'monitoring',
        label: 'Conversion',
        text: 'Pantallas orientadas a medir y mejorar resultados.'
      }
    ],
    floatingTop: {
      icon: 'architecture',
      label: 'Arquitectura',
      text: 'Base limpia para crecer sin rehacer el proyecto.',
      tone: 'primary'
    },
    floatingBottom: {
      icon: 'north_east',
      label: 'Entrega',
      text: 'Web lista para publicar, posicionar y convertir.',
      tone: 'secondary'
    }
  }
}
