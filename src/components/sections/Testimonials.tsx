'use client'
import Image from 'next/image'
import { useState } from 'react'
import './testimonial.css'

type Testimonial = {
  id: string
  clientName: string
  clientCompany: string
  clientRole: string
  clientImage: string
  testimonialText: string
  rating: number
  projectType: string
  resultHighlight?: string
}

type CaseStudy = {
  id: string
  title: string
  clientName: string
  clientImage: string
  description: string
  challenge: string
  solution: string
  result: string
  technologies: string[]
  image: string
  link?: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Carlos Mendez',
    clientCompany: 'TechStartup Co',
    clientRole: 'CEO',
    clientImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    testimonialText:
      'NextHorizon transformó completamente nuestra presencia digital. El equipo es profesional, dedicado y entregan exactamente lo que prometen. Nuestras conversiones aumentaron 150% en los primeros 3 meses.',
    rating: 5,
    projectType: 'Web Development',
    resultHighlight: '+150% conversiones'
  },
  {
    id: '2',
    clientName: 'María García',
    clientCompany: 'DigitalAgency Plus',
    clientRole: 'Directora de Proyectos',
    clientImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    testimonialText:
      'La calidad de código y atención al detalle es excepcional. Nos ayudaron a crear una arquitectura escalable que crece con nuestro negocio. Altamente recomendados.',
    rating: 5,
    projectType: 'Mobile App',
    resultHighlight: 'Arquitectura escalable'
  },
  {
    id: '3',
    clientName: 'Juan López',
    clientCompany: 'E-commerce Solutions',
    clientRole: 'CTO',
    clientImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    testimonialText:
      'Entregaron el proyecto a tiempo, dentro del presupuesto y con una calidad superior. El equipo es comunicativo y proactivo. Perfecto.',
    rating: 5,
    projectType: 'UI/UX Design',
    resultHighlight: 'On-time delivery'
  },
  {
    id: '4',
    clientName: 'Ana Rodríguez',
    clientCompany: 'FinTech Ventures',
    clientRole: 'Product Manager',
    clientImage:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    testimonialText:
      'Increíble experiencia trabajar con NextHorizon. Su enfoque centrado en el usuario y la innovación es lo que nos diferencia en el mercado.',
    rating: 5,
    projectType: 'Web Development',
    resultHighlight: 'User-centered approach'
  }
]

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Plataforma E-commerce Escalable',
    clientName: 'TechStartup Co',
    clientImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    description: 'Transformación digital completa de una startup de moda',
    challenge:
      'Necesitaban una plataforma e-commerce de alto rendimiento que manejara millones de transacciones mensuales con experiencia de usuario excepcional.',
    solution:
      'Desarrollamos una arquitectura cloud-native con Next.js, PostgreSQL y Redis, implementando optimizaciones de rendimiento y un diseño UI/UX premium.',
    result:
      'Redujeron tiempos de carga en 70%, aumentaron conversiones 150% y escalaron a 10M transacciones mensuales sin problemas.',
    technologies: [
      'Next.js',
      'React',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Tailwind CSS'
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    title: 'App Móvil Fintech',
    clientName: 'FinTech Ventures',
    clientImage:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    description: 'Aplicación móvil para gestión financiera personal',
    challenge:
      'Crear una app segura y fácil de usar para gestión de inversiones con soporte multiplataforma y autenticación biométrica.',
    solution:
      'Desarrollamos con React Native, integramos APIs de seguridad bancaria, implementamos Face ID y Touch ID, y diseñamos una interfaz intuitiva.',
    result:
      'Lanzaron exitosamente en App Store y Google Play, alcanzando 50K descargas en 3 meses con rating de 4.8 estrellas.',
    technologies: [
      'React Native',
      'Node.js',
      'Firebase',
      'Stripe API',
      'OAuth 2.0'
    ],
    image:
      'https://images.unsplash.com/photo-1512941691920-25bef266aad5?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    title: 'Rediseño Completo UI/UX',
    clientName: 'DigitalAgency Plus',
    clientImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    description: 'Rediseño integral del sistema de diseño y experiencia',
    challenge:
      'La plataforma existente tenía inconsistencias de diseño, experiencia de usuario confusa y no cumplía estándares de accesibilidad.',
    solution:
      'Creamos un Design System completo, rediseñamos todas las vistas priorizando UX, implementamos WCAG 2.1 AA compliance y documentación.',
    result:
      'Mejoraron satisfacción de usuarios de 65% a 92%, redujeron tickets de soporte en 40% y mejoraron accesibilidad significativamente.',
    technologies: [
      'Figma',
      'Storybook',
      'Angular',
      'TypeScript',
      'Accessibility'
    ],
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
  }
]

export default function Testimonials() {
  const [selectedTab, setSelectedTab] = useState<'testimonials' | 'cases'>(
    'testimonials'
  )

  return (
    <section className='py-32 px-8'>
      {' '}
      <div className='max-w-7xl mx-auto'>
        {' '}
        <div className='text-center mb-16'>
          {' '}
          <span className='text-secondary font-bold tracking-[0.2em] uppercase text-sm'>
            Experiencia{' '}
          </span>
          <h2 className='text-4xl md:text-5xl font-black tracking-tight mb-4 text-on-surface'>
            Impacto Real, Resultados Concretos
          </h2>
          <p className='text-on-surface-variant text-lg max-w-2xl mx-auto'>
            Empresas de todos los tamaños confían en NextHorizon para
            transformar sus ideas en soluciones digitales de clase mundial.
          </p>
        </div>
        <div className='flex justify-center gap-3 mb-12 flex-wrap'>
          <button
            onClick={() => setSelectedTab('testimonials')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              selectedTab === 'testimonials'
                ? 'bg-primary-fixed text-on-primary'
                : 'bg-surface-container-highest text-on-surface border border-outline-variant/25'
            }`}
          >
            <span className='material-symbols-outlined'>rate_review</span>
            Testimonios
          </button>

          <button
            onClick={() => setSelectedTab('cases')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              selectedTab === 'cases'
                ? 'bg-primary-fixed text-on-primary'
                : 'bg-surface-container-highest text-on-surface border border-outline-variant/25'
            }`}
          >
            <span className='material-symbols-outlined'>folder_special</span>
            Casos de Estudio
          </button>
        </div>
        {selectedTab === 'testimonials' && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/25 p-8 rounded-[1.75rem] hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-primary-fixed/10 flex flex-col'
              >
                <div className='mb-6'>
                  <div className='flex items-center gap-4 mb-4'>
                    <Image
                      height={48}
                      width={48}
                      src={testimonial.clientImage}
                      alt={testimonial.clientName}
                      className='w-12 h-12 rounded-full object-cover'
                    />

                    <div className='flex-1'>
                      <h3 className='font-bold text-on-surface'>
                        {testimonial.clientName}
                      </h3>

                      <p className='text-sm text-on-surface-variant'>
                        {testimonial.clientRole} · {testimonial.clientCompany}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex gap-1'>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-lg ${
                            star > testimonial.rating ? 'opacity-40' : ''
                          }`}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>

                    <span className='text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary-fixed/20 text-primary-fixed'>
                      {testimonial.projectType}
                    </span>
                  </div>
                </div>

                <p className='text-on-surface-variant leading-relaxed mb-6 flex-1'>
                  {testimonial.testimonialText}
                </p>

                {testimonial.resultHighlight && (
                  <div className='flex items-center gap-2 text-primary-fixed text-sm font-bold'>
                    <span className='material-symbols-outlined text-base'>
                      check_circle
                    </span>

                    <span>{testimonial.resultHighlight}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {selectedTab === 'cases' && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className='bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/25 rounded-[1.75rem] overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-primary-fixed/10 flex flex-col'
              >
                <div className='relative h-48 overflow-hidden bg-surface-dim'>
                  <Image
                    height={300}
                    width={400}
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                  />

                  <div className='absolute inset-0 bg-linear-to-t from-black/40 to-transparent' />
                </div>

                <div className='p-8 flex flex-col flex-1'>
                  <div className='flex items-center gap-3 mb-4'>
                    <Image
                      height={40}
                      width={40}
                      src={caseStudy.clientImage}
                      alt={caseStudy.clientName}
                      className='w-10 h-10 rounded-full object-cover'
                    />

                    <h4 className='font-bold text-on-surface text-sm'>
                      {caseStudy.clientName}
                    </h4>
                  </div>

                  <h3 className='text-xl font-bold text-on-surface mb-4'>
                    {caseStudy.title}
                  </h3>

                  <div className='space-y-3 mb-6'>
                    <div>
                      <h4 className='font-bold text-primary-fixed text-sm mb-1'>
                        Desafío
                      </h4>

                      <p className='text-sm text-on-surface-variant'>
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className='font-bold text-secondary text-sm mb-1'>
                        Solución
                      </h4>

                      <p className='text-sm text-on-surface-variant'>
                        {caseStudy.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className='font-bold text-tertiary text-sm mb-1'>
                        Resultado
                      </h4>

                      <p className='text-sm text-tertiary font-bold'>
                        {caseStudy.result}
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-2 pt-4 border-t border-outline-variant/25'>
                    {caseStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='text-xs font-bold bg-surface-dim px-3 py-1 rounded-full text-primary-fixed'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
