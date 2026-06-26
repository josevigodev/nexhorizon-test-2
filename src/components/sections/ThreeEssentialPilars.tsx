'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { SectionLabel } from '../SectionLabel'
import {
  Compass,
  Layers,
  Code2,
  Check,
  ArrowRight,
  Rocket,
  Lightbulb,
  CheckCircle,
  Zap,
  Globe,
  TrendingUp
} from 'lucide-react'

const GOLD = '#e6a91e'
const TITLE = '#1c1810'
const SECONDARY = '#7a6a4a'
const SURFACE = '#f8f5ef'
const BORDER = 'rgba(122,106,74,0.14)'

const services = [
  {
    icon: Compass,
    phase: '01',
    title: 'Asesoría Estratégica y MVP',
    description:
      'Transformamos ideas en estrategias accionables. Definimos objetivos, identificamos oportunidades y diseñamos MVPs enfocados en validar hipótesis antes de realizar grandes inversiones.',
    items: [
      'Validación de ideas',
      'Estrategia de producto',
      'Roadmaps tecnológicos',
      'MVPs enfocados en aprendizaje'
    ],
    highlight: 'Reduce riesgos antes de invertir.',
    accent: 'Estrategia'
  },
  {
    icon: Layers,
    phase: '02',
    title: 'Diseño UI/UX',
    description:
      'Creamos experiencias intuitivas, modernas y alineadas con las necesidades reales de los usuarios para maximizar adopción y satisfacción.',
    items: [
      'Investigación de usuarios',
      'Wireframes',
      'Diseño visual',
      'Sistemas de diseño',
      'Prototipos interactivos'
    ],
    highlight: 'Diseños pensados para convertir.',
    accent: 'Diseño'
  },
  {
    icon: Code2,
    phase: '03',
    title: 'Desarrollo de Sistemas',
    description:
      'Construimos plataformas robustas, aplicaciones modernas y sistemas escalables utilizando tecnologías actuales y metodologías eficientes.',
    items: [
      'Aplicaciones web',
      'Aplicaciones móviles',
      'Paneles administrativos',
      'APIs y backend',
      'Arquitecturas escalables'
    ],
    highlight: 'Soluciones preparadas para crecer.',
    accent: 'Desarrollo'
  }
]

const timelineSteps = [
  { label: 'Idea', icon: Lightbulb },
  { label: 'Validación', icon: CheckCircle },
  { label: 'Diseño', icon: Layers },
  { label: 'Desarrollo', icon: Code2 },
  { label: 'Lanzamiento', icon: Rocket },
  { label: 'Evolución', icon: TrendingUp }
]

function ServiceCard({
  service,
  index
}: {
  service: (typeof services)[0]
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: SURFACE,
        border: `1px solid ${hovered ? 'rgba(230,169,30,0.4)' : BORDER}`,
        borderRadius: 20,
        boxShadow: hovered
          ? '0 20px 60px rgba(230,169,30,0.10), 0 4px 20px rgba(28,24,16,0.07)'
          : '0 2px 12px rgba(28,24,16,0.05)',
        transition:
          'box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        gap: '1.25rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Top-right phase number */}
      <span
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.75rem',
          fontWeight: 800,
          fontSize: '3.5rem',
          lineHeight: 1,
          color: hovered ? 'rgba(230,169,30,0.12)' : 'rgba(28,24,16,0.05)',
          transition: 'color 0.35s ease',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.04em'
        }}
      >
        {service.phase}
      </span>

      {/* Icon pill */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: hovered
            ? 'rgba(230,169,30,0.12)'
            : 'rgba(230,169,30,0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.35s ease',
          flexShrink: 0
        }}
      >
        <Icon size={22} color={GOLD} strokeWidth={1.8} />
      </div>

      {/* Title */}
      <div>
        <p
          style={{
            fontWeight: 500,
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: GOLD,
            marginBottom: '0.35rem'
          }}
        >
          {service.accent}
        </p>
        <h3
          style={{
            fontWeight: 700,
            fontSize: '1.2rem',
            lineHeight: 1.3,
            color: TITLE,
            margin: 0
          }}
        >
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p
        style={{
          fontWeight: 400,
          fontSize: '0.925rem',
          lineHeight: 1.65,
          color: SECONDARY,
          margin: 0
        }}
      >
        {service.description}
      </p>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: hovered
            ? 'rgba(230,169,30,0.25)'
            : 'rgba(122,106,74,0.1)',
          transition: 'background 0.35s ease'
        }}
      />

      {/* Checklist */}
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.55rem'
        }}
      >
        {service.items.map((item) => (
          <li
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontWeight: 400,
              fontSize: '0.875rem',
              color: SECONDARY
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'rgba(230,169,30,0.10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Check size={10} color={GOLD} strokeWidth={2.5} />
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Highlight pill */}
      <div
        style={{
          marginTop: 'auto',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: hovered
            ? 'rgba(230,169,30,0.10)'
            : 'rgba(230,169,30,0.06)',
          border: `1px solid ${hovered ? 'rgba(230,169,30,0.3)' : 'rgba(230,169,30,0.15)'}`,
          borderRadius: 100,
          padding: '0.4rem 0.85rem',
          width: 'fit-content',
          transition: 'background 0.35s ease, border-color 0.35s ease'
        }}
      >
        <Zap size={12} color={GOLD} strokeWidth={2} />
        <span
          style={{
            fontWeight: 600,
            fontSize: '0.8rem',
            color: '#b8850e'
          }}
        >
          {service.highlight}
        </span>
      </div>
    </motion.div>
  )
}

function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ width: '100%', overflowX: 'auto' }}
    >
      {/* Desktop timeline */}
      <div
        className='hidden md:flex'
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          padding: '0.5rem 0'
        }}
      >
        {timelineSteps.map((step, i) => {
          const StepIcon = step.icon
          return (
            <div
              key={step.label}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background:
                      i === 0 || i === timelineSteps.length - 1
                        ? 'rgba(230,169,30,0.12)'
                        : SURFACE,
                    border: `2px solid ${i === 0 || i === timelineSteps.length - 1 ? 'rgba(230,169,30,0.5)' : BORDER}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <StepIcon size={20} color={GOLD} strokeWidth={1.7} />
                </div>
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: '0.78rem',
                    color: SECONDARY,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {step.label}
                </span>
              </motion.div>

              {i < timelineSteps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + i * 0.1,
                    ease: 'easeOut'
                  }}
                  style={{
                    height: 1.5,
                    width: 56,
                    marginBottom: 24,
                    background: `linear-gradient(90deg, ${GOLD}, rgba(230,169,30,0.3))`,
                    transformOrigin: 'left center',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      right: -3,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: GOLD,
                      opacity: 0.5
                    }}
                  />
                </motion.div>
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile timeline — vertical */}
      <div
        className='flex md:hidden'
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 0,
          padding: '0 1rem'
        }}
      >
        {timelineSteps.map((step, i) => {
          const StepIcon = step.icon
          return (
            <div
              key={step.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem'
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: SURFACE,
                    border: `1.5px solid ${i === 0 || i === timelineSteps.length - 1 ? 'rgba(230,169,30,0.5)' : BORDER}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <StepIcon size={17} color={GOLD} strokeWidth={1.7} />
                </div>
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    color: SECONDARY
                  }}
                >
                  {step.label}
                </span>
              </div>
              {i < timelineSteps.length - 1 && (
                <div
                  style={{
                    width: 40,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    style={{
                      width: 1.5,
                      height: 28,
                      background: `linear-gradient(180deg, ${GOLD}, rgba(230,169,30,0.2))`
                    }}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export function ThreeEssentialPilarsSections() {
  const closingRef = useRef(null)
  const closingInView = useInView(closingRef, { once: true, margin: '-80px' })

  return (
    <div
      id='services'
      style={{
        minHeight: '100vh',
        background: '#faf8f4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1.5rem'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1160,
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem'
        }}
      >
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.25rem'
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <SectionLabel>Nuestro Enfoque</SectionLabel>
          </div>

          {/* Title */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.9rem, 4vw, 3.1rem)',
              lineHeight: 1.18,
              letterSpacing: '-0.025em',
              color: TITLE,
              margin: 0,
              maxWidth: 700
            }}
          >
            Los 3 pilares que convierten{' '}
            <span className='animated-gradient-text'>
              ideas en productos exitosos
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontWeight: 400,
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: SECONDARY,
              margin: 0,
              maxWidth: 560
            }}
          >
            Acompañamos a nuestros clientes desde la validación inicial hasta el
            lanzamiento y evolución de soluciones digitales escalables.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* ── Timeline section ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <SectionLabel>El proceso completo</SectionLabel>
          </div>

          <div
            style={{
              width: '100%',
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              borderRadius: 20,
              padding: '2.25rem 2rem'
            }}
          >
            <Timeline />
          </div>
        </div>

        {/* ── Closing message ── */}
        <motion.div
          ref={closingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={closingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.5rem',
            padding: '3.5rem 2.5rem',
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 24,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative glow */}
          <div
            style={{
              position: 'absolute',
              top: -60,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 320,
              height: 160,
              background: `radial-gradient(ellipse at center, rgba(230,169,30,0.12) 0%, transparent 70%)`,
              pointerEvents: 'none'
            }}
          />

          {/* Globe icon */}
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(230,169,30,0.09)',
              border: `1px solid rgba(230,169,30,0.2)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Globe size={24} color={GOLD} strokeWidth={1.6} />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              maxWidth: 600
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: 'clamp(1.35rem, 2.5vw, 1.9rem)',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                color: TITLE,
                margin: 0
              }}
            >
              Todo lo que necesitas para lanzar y hacer crecer tu producto
              digital.
            </h3>
            <p
              style={{
                fontWeight: 400,
                fontSize: '0.97rem',
                lineHeight: 1.7,
                color: SECONDARY,
                margin: 0
              }}
            >
              Desde la estrategia inicial hasta la implementación técnica,
              trabajamos como un socio tecnológico que te acompaña en cada etapa
              del proceso.
            </p>
          </div>

          {/* CTA button */}
          <CtaButton />
        </motion.div>
      </div>
    </div>
  )
}

function CtaButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href='/servicios'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        background: hovered
          ? 'linear-gradient(135deg, #e6a91e 0%, #c98b10 100%)'
          : 'linear-gradient(135deg, #e6a91e 0%, #d49a18 100%)',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: '0.9rem',
        letterSpacing: '0.01em',
        padding: '0.8rem 1.75rem',
        borderRadius: 100,
        textDecoration: 'none',
        boxShadow: hovered
          ? '0 8px 28px rgba(230,169,30,0.4), 0 2px 8px rgba(28,24,16,0.1)'
          : '0 4px 16px rgba(230,169,30,0.25)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.25s ease'
      }}
    >
      Explorar servicios
      <ArrowRight
        size={16}
        strokeWidth={2.2}
        style={{
          transition: 'transform 0.25s ease',
          transform: hovered ? 'translateX(3px)' : 'translateX(0)'
        }}
      />
    </a>
  )
}
