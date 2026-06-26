'use client'

import { useMemo, useState } from 'react'
import './faq.css'

type FAQ = {
  id: string
  question: string
  answer: string
  category: string
  icon?: string
}

const faqs: FAQ[] = [
  {
    id: '1',
    category: 'Proceso',
    question: '¿Cómo es el proceso de desarrollo?',
    answer:
      'Nuestro proceso sigue metodología Agile con sprints de 2 semanas. Incluye discovery, diseño, desarrollo iterativo, testing y deployment. Tendrás reuniones semanales de progreso y acceso completo al repositorio.'
  },
  {
    id: '2',
    category: 'Proceso',
    question: '¿Cuánto tiempo toma un proyecto típico?',
    answer:
      'Depende de la complejidad. Un MVP simple: 4-8 semanas. Una plataforma mediana: 3-4 meses. Proyectos enterprise: 6+ meses. Proporcionamos estimaciones detalladas en la fase de discovery.'
  },
  {
    id: '3',
    category: 'Precios',
    question: '¿Cómo funciona el pricing?',
    answer:
      'Ofrecemos tres modelos: Fixed Price para proyectos bien definidos, Time & Materials para alcance variable, y Retainer para soporte continuo. Presupuesto inicial siempre es transparente sin sorpresas.'
  },
  {
    id: '4',
    category: 'Precios',
    question: '¿Hay costos ocultos?',
    answer:
      'No. Todo está documentado en el contrato. Los únicos costos adicionales serían servicios extra solicitados después del scope inicial, que se comunican con presupuesto aprobado.'
  },
  {
    id: '5',
    category: 'Tecnología',
    question: '¿Qué tecnologías usan?',
    answer:
      'Utilizamos tech stack moderno: React/Next.js (frontend), Node.js/Python (backend), React Native/Flutter (mobile), PostgreSQL/MongoDB (databases), AWS/GCP (cloud). Seleccionamos la mejor opción para cada proyecto.'
  },
  {
    id: '6',
    category: 'Tecnología',
    question: '¿Puedo elegir la tecnología?',
    answer:
      'Sí. Recomendamos tecnologías basadas en requisitos, pero respetamos preferencias. Si tu equipo sabe una stack específica, podemos trabajar con ella siempre que sea viable.'
  },
  {
    id: '7',
    category: 'Soporte',
    question: '¿Qué incluye el mantenimiento post-lanzamiento?',
    answer:
      'Incluye monitoreo 24/7, corrección de bugs, optimizaciones de performance, actualizaciones de seguridad y soporte técnico. Ofrecemos planes desde maintenance básico hasta full support con features nuevas.'
  },
  {
    id: '8',
    category: 'Soporte',
    question: '¿Puedo escalar el proyecto después?',
    answer:
      'Totalmente. Diseñamos con escalabilidad en mente. Puedes agregar features, usuarios, o integrar nuevos sistemas sin replantear la arquitectura. Ese es un beneficio de nuestra metodología.'
  },
  {
    id: '9',
    category: 'Comunicación',
    question: '¿Cómo me mantendrán informado?',
    answer:
      'Comunicación semanal mínimo. Tendrás acceso a repositorio GitHub, tablero de tareas en tiempo real (Jira/Trello), reuniones semanales y reportes de progreso. Respuesta en 24h a todas las consultas.'
  },
  {
    id: '10',
    category: 'Seguridad',
    question: '¿Qué medidas de seguridad implementan?',
    answer:
      'Cumplimos OWASP Top 10, encriptación end-to-end, autenticación segura, regular security audits, GDPR compliance, y seguimiento de mejores prácticas. Documentamos todo en arquitectura de seguridad.'
  }
]

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = useMemo(
    () => ['all', ...new Set(faqs.map((faq) => faq.category))],
    []
  )

  const filteredFAQs = useMemo(() => {
    if (selectedCategory === 'all') {
      return faqs
    }

    return faqs.filter((faq) => faq.category === selectedCategory)
  }, [selectedCategory])

  const toggleExpanded = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const filterByCategory = (category: string) => {
    setSelectedCategory(category)
    setExpandedId(null)
  }

  return (
    <section className='py-32 px-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <span className='text-secondary font-bold tracking-[0.2em] uppercase text-sm'>
            Preguntas
          </span>

          <h2 className='text-4xl md:text-5xl font-black tracking-tight mb-4 text-on-surface'>
            Todo lo que Necesitas Saber
          </h2>

          <p className='text-on-surface-variant text-lg max-w-2xl mx-auto'>
            Respuestas claras a las preguntas más comunes sobre nuestro proceso,
            tecnología y soporte.
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterByCategory(category)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-fixed text-on-primary'
                  : 'bg-surface-container-highest text-on-surface border border-outline-variant/25'
              }`}
            >
              {category === 'all' ? 'Todas' : category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className='space-y-3 mb-16'>
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              onClick={() => toggleExpanded(faq.id)}
              className='bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/25 p-6 rounded-[1.75rem] cursor-pointer hover:border-primary-fixed/50 transition-all duration-300'
            >
              {/* Question */}
              <div className='flex items-start justify-between gap-4'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <span
                      className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${
                        faq.category === 'Proceso'
                          ? 'bg-primary-fixed/20 text-primary-fixed'
                          : faq.category === 'Precios'
                            ? 'bg-secondary/20 text-secondary'
                            : 'bg-tertiary/20 text-tertiary'
                      }`}
                    >
                      {faq.category}
                    </span>
                  </div>

                  <h3 className='text-lg font-bold text-on-surface'>
                    {faq.question}
                  </h3>
                </div>

                <span
                  className={`material-symbols-outlined text-primary-fixed shrink-0 transition-transform duration-300 ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  {expandedId === faq.id ? 'expand_less' : 'expand_more'}
                </span>
              </div>

              {/* Answer */}
              {expandedId === faq.id && (
                <div className='mt-4 pt-4 border-t border-outline-variant/25'>
                  <p className='text-on-surface-variant leading-relaxed'>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='bg-primary-fixed/10 border border-primary-fixed/25 rounded-[1.75rem] p-12 text-center'>
          <h3 className='text-2xl font-black text-on-surface mb-3'>
            ¿Aún tienes preguntas?
          </h3>

          <p className='text-on-surface-variant mb-6'>
            Nuestro equipo está disponible para clarificaciones adicionales.
          </p>

          <a
            href='#contact'
            className='inline-flex items-center gap-2 bg-primary-fixed text-on-primary px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1'
          >
            Contáctanos
            <span className='material-symbols-outlined'>arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
