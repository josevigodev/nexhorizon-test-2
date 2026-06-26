import { ServicePageModel } from './service-page.model'
import WebGym from '@/assets/images/imgs/web/web-gym.jpg'

export const TECHNOLOGY_CONSULTING_PAGE: ServicePageModel = {
  slug: 'technology-consulting',
  serviceLabel: 'Consultoria tecnologica',
  heroTitle:
    'Te ayudamos a tomar mejores decisiones tecnicas, priorizar con claridad y construir una ruta viable.',
  heroDescription:
    'Este servicio esta pensado para equipos y negocios que necesitan direccion tecnica sin improvisacion. Aterrizamos stack, prioridades, riesgos y roadmap para que el crecimiento no dependa de intuiciones aisladas.',
  primaryCtaLabel: 'Solicitar consultoria',
  secondaryCtaLabel: 'Ver escenarios tipo',
  whyTitle:
    'Consultoria pensada para transformar dudas tecnicas en decisiones accionables.',
  whyDescription:
    'No llegamos con recomendaciones abstractas. Trabajamos contexto de negocio, equipo, producto y restricciones reales para construir una direccion que puedas ejecutar.',
  showcaseTitle:
    'Escenarios del tipo de acompañamiento estrategico que desarrollamos con equipos y negocios.',
  showcaseDescription:
    'Estas referencias muestran como traducimos problemas tecnicos, de crecimiento o de organizacion en planes mas claros y sostenibles.',
  ctaTitle:
    'Si necesitas claridad tecnica para el siguiente paso de tu producto, podemos trabajar esa ruta contigo.',
  ctaDescription:
    'Desde auditorias y evaluaciones de stack hasta roadmaps de evolucion, construimos decisiones aterrizadas que te ayuden a avanzar con menos riesgo.',
  stats: [
    {
      value: 'Audit + Roadmap',
      label: 'Base de consultoria',
      description:
        'Partimos de contexto real y terminamos en un plan accionable.'
    },
    {
      value: 'Priorizacion',
      label: 'Enfoque',
      description:
        'Ordenamos que mover primero, que posponer y donde hay mas impacto.'
    },
    {
      value: 'Decision Support',
      label: 'Acompanamiento',
      description:
        'Ayudamos a elegir stack, alcance y direccion con criterios claros.'
    }
  ],
  benefits: [
    {
      icon: 'fact_check',
      title: 'Diagnostico tecnico',
      description:
        'Leemos la situacion actual para detectar riesgos, deuda y oportunidades.'
    },
    {
      icon: 'alt_route',
      title: 'Roadmaps realistas',
      description:
        'Convertimos ambicion difusa en una secuencia viable de decisiones y entregas.'
    },
    {
      icon: 'stacked_line_chart',
      title: 'Priorizacion con criterio',
      description:
        'Ayudamos a enfocar tiempo y presupuesto donde realmente mueve el negocio.'
    },
    {
      icon: 'account_tree',
      title: 'Stack y arquitectura',
      description:
        'Definimos opciones tecnicas segun contexto, no por moda o intuicion aislada.'
    },
    {
      icon: 'groups',
      title: 'Alineacion entre equipo y producto',
      description:
        'Traducimos lo tecnico a decisiones entendibles para producto y negocio.'
    },
    {
      icon: 'shield',
      title: 'Menos riesgo de ejecucion',
      description:
        'Tomar mejores decisiones temprano evita retrabajo y friccion despues.'
    }
  ],
  deliveryPillars: [
    'Direccion tecnica conectada con negocio, equipo y realidad operativa',
    'Priorizacion clara para reducir incertidumbre y retrabajo',
    'Roadmap accionable con decisiones que si pueden ejecutarse'
  ],
  process: [
    {
      step: '01',
      title: 'Entendemos contexto, problema y limitaciones',
      description:
        'Antes de recomendar, aterrizamos objetivos, equipo, stack actual y fricciones reales.'
    },
    {
      step: '02',
      title: 'Evaluamos escenarios y opciones',
      description:
        'Comparamos alternativas y construimos una direccion tecnica coherente.'
    },
    {
      step: '03',
      title: 'Entregamos plan, prioridades y siguientes pasos',
      description:
        'La consultoria termina en decisiones accionables, no en teoria suelta.'
    }
  ],
  successProjects: [
    {
      name: 'Roadmap para evolucion de plataforma',
      category: 'Escenario de servicio',
      summary:
        'Una hoja de ruta para pasar de un producto reactivo a una operacion mas ordenada y escalable.',
      description:
        'Ideal cuando el producto ya existe, pero el equipo necesita claridad sobre que atacar primero y como estructurar mejor la base tecnica.',
      badges: ['Roadmap', 'Arquitectura', 'Prioridad'],
      previewIcon: 'timeline',
      image: WebGym,
      previewLabel: 'Roadmap estrategico',
      actionLabel: 'Quiero una consultoria similar',
      metrics: [
        { value: 'Risk', label: 'Riesgos visibles desde temprano' },
        { value: 'Stack', label: 'Direccion tecnica con criterio' },
        { value: 'Plan', label: 'Siguientes pasos accionables' }
      ]
    },
    {
      name: 'Evaluacion de stack y procesos',
      category: 'Escenario de servicio',
      summary:
        'Un trabajo de claridad para equipos que sienten friccion entre producto, tecnologia y tiempos de entrega.',
      description:
        'Aqui analizamos estructura, decisiones y operacion para detectar donde se esta perdiendo velocidad o enfoque.',
      badges: ['Audit', 'Equipo', 'Operacion'],
      previewIcon: 'query_stats',
      previewLabel: 'Diagnostico tecnico',
      actionLabel: 'Solicitar evaluacion',
      image: WebGym,
      metrics: [
        { value: 'Clarity', label: 'Decisiones mejor fundamentadas' },
        { value: 'Focus', label: 'Menos dispersion de esfuerzo' },
        { value: 'Ops', label: 'Mejor alineacion de trabajo' }
      ]
    }
  ],
  heroVisual: {
    panelEyebrow: 'Direccion tecnica',
    panelTitle: 'Clarity first para decidir mejor antes de construir de mas',
    panelBadge: 'Roadmap + audit',
    image: WebGym,
    imageAlt:
      'Vista principal representativa del servicio de consultoria tecnologica',
    chips: ['Audit', 'Stack', 'Roadmap', 'Prioridades', 'Equipo', 'Riesgos'],
    cards: [
      {
        icon: 'analytics',
        label: 'Diagnostico',
        text: 'Leemos contexto tecnico y operativo antes de recomendar.'
      },
      {
        icon: 'schema',
        label: 'Opciones',
        text: 'Comparamos escenarios para elegir una direccion mas sensata.'
      },
      {
        icon: 'flag',
        label: 'Prioridad',
        text: 'Ordenamos que mover primero y que puede esperar.'
      },
      {
        icon: 'map',
        label: 'Ruta',
        text: 'Convertimos decisiones en un plan accionable y entendible.'
      }
    ],
    floatingTop: {
      icon: 'troubleshoot',
      label: 'Diagnostico',
      text: 'Entender bien el problema evita decisiones caras despues.',
      tone: 'primary'
    },
    floatingBottom: {
      icon: 'checklist',
      label: 'Resultado',
      text: 'Roadmap claro, prioridades y siguientes pasos concretos.',
      tone: 'secondary'
    }
  }
}
