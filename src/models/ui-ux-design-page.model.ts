import { ServicePageModel } from './service-page.model'
import DesignImage from '@/assets/images/imgs/design/design.jpg'

export const UI_UX_DESIGN_PAGE: ServicePageModel = {
  slug: 'ui-ux-design',
  serviceLabel: 'Diseno UI/UX',
  heroTitle:
    'Diseñamos interfaces y recorridos digitales que se sienten claros, utiles y memorables.',
  heroDescription:
    'Este servicio esta orientado a productos y marcas que necesitan mejorar como se ve y como se usa su experiencia digital. Trabajamos investigacion, estructura, interfaz y sistemas visuales con foco en claridad, consistencia y conversion.',
  primaryCtaLabel: 'Solicitar servicio',
  secondaryCtaLabel: 'Ver proyectos tipo',
  whyTitle:
    'UI/UX pensado para reducir friccion, reforzar marca y mejorar la experiencia real del usuario.',
  whyDescription:
    'No se trata solo de hacer pantallas bonitas. Diseñamos decisiones visuales y funcionales que ayudan al usuario a entender, confiar y avanzar con menos esfuerzo.',
  showcaseTitle:
    'Escenarios del tipo de experiencias digitales que trabajamos en UI y UX.',
  showcaseDescription:
    'Estas referencias muestran la clase de sistemas visuales, flujos y pantallas que desarrollamos para productos nuevos o rediseños.',
  ctaTitle:
    'Si necesitas ordenar la experiencia de tu producto y elevar su calidad visual, podemos diseñarlo contigo.',
  ctaDescription:
    'Desde auditorias UX y flujos base hasta sistemas visuales completos, trabajamos soluciones que conectan negocio, producto y usabilidad.',
  stats: [
    {
      value: 'Research + UI',
      label: 'Base de trabajo',
      description:
        'Combinamos criterio visual con entendimiento real del recorrido del usuario.'
    },
    {
      value: 'Figma',
      label: 'Entregables claros',
      description:
        'Organizamos prototipos, componentes y handoff de forma limpia.'
    },
    {
      value: 'Design System',
      label: 'Consistencia',
      description:
        'Creamos bases visuales que ayudan a mantener el producto ordenado al escalar.'
    }
  ],
  benefits: [
    {
      icon: 'search',
      title: 'Diagnostico de experiencia',
      description:
        'Identificamos fricciones, puntos de abandono y oportunidades de mejora real.'
    },
    {
      icon: 'account_tree',
      title: 'Flujos claros',
      description:
        'Diseñamos recorridos que reducen carga mental y ayudan a completar tareas.'
    },
    {
      icon: 'palette',
      title: 'Interfaz con identidad',
      description:
        'La capa visual se alinea con la marca sin perder claridad ni legibilidad.'
    },
    {
      icon: 'view_quilt',
      title: 'Sistemas reutilizables',
      description:
        'Estructuramos componentes y patrones que facilitan coherencia futura.'
    },
    {
      icon: 'touch_app',
      title: 'Prototipos utiles',
      description:
        'Mostramos decisiones y comportamientos antes de entrar a desarrollo.'
    },
    {
      icon: 'handyman',
      title: 'Handoff ordenado',
      description:
        'La entrega queda preparada para que el desarrollo avance con menos ambiguedad.'
    }
  ],
  deliveryPillars: [
    'Experiencia definida desde flujos, prioridades y objetivos del usuario',
    'Interfaz minimalista, coherente y alineada con la identidad de marca',
    'Sistema visual listo para escalar y facilitar desarrollo posterior'
  ],
  process: [
    {
      step: '01',
      title: 'Auditamos y entendemos la experiencia',
      description:
        'Leemos contexto, usuarios, objetivos y problemas antes de mover una sola pantalla.'
    },
    {
      step: '02',
      title: 'Definimos flujo, estructura y UI',
      description:
        'Traducimos decisiones de UX en pantallas claras, consistentes y listas para iterar.'
    },
    {
      step: '03',
      title: 'Entregamos prototipo y sistema',
      description:
        'Dejamos una base util para validar, presentar y desarrollar con menos friccion.'
    }
  ],
  successProjects: [
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
  ],
  heroVisual: {
    panelEyebrow: 'Diseno digital',
    panelTitle:
      'Interfaces claras y recorridos que ayudan al usuario a avanzar mejor',
    panelBadge: 'UI/UX system',
    image: DesignImage,
    imageAlt: 'Vista principal de un proyecto de diseno UI y UX',
    chips: [
      'Research',
      'Wireframes',
      'UI Kit',
      'Figma',
      'Prototype',
      'Handoff'
    ],
    cards: [
      {
        icon: 'route',
        label: 'Flujos',
        text: 'Recorridos definidos para reducir friccion y aumentar claridad.'
      },
      {
        icon: 'draw',
        label: 'UI',
        text: 'Pantallas cuidadas con identidad visual y lectura ordenada.'
      },
      {
        icon: 'widgets',
        label: 'Sistema',
        text: 'Componentes y patrones listos para escalar el producto.'
      },
      {
        icon: 'gesture_select',
        label: 'Prototipo',
        text: 'Interacciones visibles antes de entrar a desarrollo.'
      }
    ],
    floatingTop: {
      icon: 'psychology',
      label: 'Experiencia',
      text: 'Decisiones visuales conectadas con comportamiento real.',
      tone: 'primary'
    },
    floatingBottom: {
      icon: 'design_services',
      label: 'Entrega',
      text: 'Base lista para validar, presentar y construir.',
      tone: 'neutral'
    }
  }
}
