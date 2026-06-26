'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  Rocket,
  BarChart2,
  Brain,
  Settings2,
  TrendingUp,
  Zap,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Shield,
  Cpu,
  ChevronRight
} from 'lucide-react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts'
import { SectionLabel } from '../SectionLabel'

// ── Brand tokens ──────────────────────────────────────────────────────────────
const AMBER = '#C9910A'
const BLUE = '#3B7BFF'
const CARD = '#f2f0e9'
const BORDER = 'rgba(255,255,255,0.07)'

// ── Data ──────────────────────────────────────────────────────────────────────
const timelineStages = [
  {
    id: 1,
    title: 'MVP',
    description:
      'Lanzamos una versión enfocada en validar hipótesis con la menor inversión posible.',
    Icon: Rocket,
    color: '#6366F1',
    glow: 'rgba(99,102,241,0.25)',
    aiLabel: '⚡ Automatización'
  },
  {
    id: 2,
    title: 'Aprendizaje',
    description:
      'Analizamos comportamiento real de usuarios y recopilamos feedback.',
    Icon: BarChart2,
    color: '#22D3EE',
    glow: 'rgba(34,211,238,0.25)',
    aiLabel: '⚡ Desarrollo asistido por IA'
  },
  {
    id: 3,
    title: 'Optimización',
    description:
      'Priorizamos mejoras basadas en datos reales y objetivos de negocio.',
    Icon: Brain,
    color: AMBER,
    glow: 'rgba(201,145,10,0.25)',
    aiLabel: '⚡ Optimización continua'
  },
  {
    id: 4,
    title: 'Evolución',
    description:
      'Implementamos nuevas funcionalidades únicamente donde generan valor.',
    Icon: Settings2,
    color: '#A78BFA',
    glow: 'rgba(167,139,250,0.25)',
    aiLabel: '⚡ Reducción de tiempos'
  },
  {
    id: 5,
    title: 'Escalado',
    description:
      'El producto crece junto al negocio sin desperdiciar recursos.',
    Icon: TrendingUp,
    color: '#34D399',
    glow: 'rgba(52,211,153,0.25)',
    aiLabel: '⚡ Menor costo operativo'
  }
]

const traditionalItems = [
  'Equipo sobredimensionado',
  'Procesos manuales',
  'Mantenimiento costoso',
  'Cambios lentos',
  'Costos fijos elevados',
  'Poca adaptabilidad'
]

const nexItems = [
  'IA integrada al proceso',
  'Automatización de tareas repetitivas',
  'Mantenimiento optimizado',
  'Iteraciones rápidas',
  'Costos ajustados a necesidades reales',
  'Escalado progresivo'
]

const traditionalData = [
  { m: 'M1', costo: 20 },
  { m: 'M3', costo: 35 },
  { m: 'M6', costo: 55 },
  { m: 'M9', costo: 80 },
  { m: 'M12', costo: 120 }
]

const nexData = [
  { m: 'M1', costo: 20 },
  { m: 'M3', costo: 22 },
  { m: 'M6', costo: 28 },
  { m: 'M9', costo: 32 },
  { m: 'M12', costo: 38 }
]

const tiers = [
  {
    level: 1,
    name: 'Monitoreo y soporte',
    tag: 'Ideal para MVPs',
    features: [
      'Monitoreo 24/7',
      'Corrección de bugs críticos',
      'Soporte técnico básico'
    ],
    color: BLUE,
    widthClass: 'w-1/3'
  },
  {
    level: 2,
    name: 'Mejoras continuas',
    tag: 'Para productos en crecimiento',
    features: [
      'Todo del Nivel 1',
      'Optimización de rendimiento',
      'Nuevas funcionalidades',
      'Analytics avanzado'
    ],
    color: AMBER,
    widthClass: 'w-2/3'
  },
  {
    level: 3,
    name: 'Escalado avanzado',
    tag: 'Para negocios consolidados',
    features: [
      'Todo del Nivel 2',
      'Arquitectura escalable',
      'Integración profunda de IA',
      'Equipo dedicado'
    ],
    color: '#6366F1',
    widthClass: 'w-full'
  }
]

// ── Helpers ───────────────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = ''
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Sections ──────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className='relative overflow-hidden pt-28 pb-20 px-6'>
      {/* Grid texture */}
      <div className='absolute inset-0 pointer-events-none' />
      <div className='relative max-w-4xl mx-auto text-center'>
        <span className='text-primary-fixed font-bold tracking-[0.2em text-sm bg-primary-fixed/10 px-5 py-2.5 rounded-xl border border-primary-fixed/15'>
          Modelo de Evolución Digital
        </span>

        <FadeIn delay={0.1}>
          <h2 className='animated-gradient-text mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight'>
            Tu producto no termina cuando se lanza.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className='mt-5 text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed'>
            Los productos digitales exitosos evolucionan constantemente. La
            diferencia está en hacerlo de forma inteligente, eficiente y
            financieramente sostenible.
          </p>
        </FadeIn>

        {/* Decorative glow orbs */}
        <div
          className='absolute -top-20 left-1/2 -translate-x-1/2 w-125 h-75 rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse, rgba(201,145,10,0.06) 0%, transparent 70%)'
          }}
        />
      </div>
    </section>
  )
}

function TimelineSection() {
  return (
    <section className='py-24 px-6 bg-surface-container-high'>
      <div className='max-w-6xl mx-auto'>
        <FadeIn className='text-center mb-16'>
          <SectionLabel>
            <Cpu size={11} />
            Ciclo de vida del producto
          </SectionLabel>
          <h2 className='mt-4 text-3xl sm:text-4xl font-bold animated-gradient-text'>
            El modelo evolutivo inteligente
          </h2>
          <p className='mt-3 text-base max-w-xl mx-auto text-on-surface-variant'>
            Cada etapa optimizada con IA para maximizar valor y minimizar
            costos.
          </p>
        </FadeIn>

        {/* Timeline desktop: horizontal steps */}
        <div className='hidden md:flex items-start gap-0'>
          {timelineStages.map((stage, i) => {
            const { Icon } = stage
            return (
              <div
                key={stage.id}
                className='flex-1 flex flex-col items-center relative'
              >
                {/* Connector line */}
                {i < timelineStages.length - 1 && (
                  <div
                    className='absolute top-7 left-1/2 w-full h-px z-0'
                    style={{
                      background: `linear-gradient(90deg, ${stage.color}60, ${timelineStages[i + 1].color}60)`
                    }}
                  />
                )}

                <FadeIn
                  delay={i * 0.1}
                  className='flex flex-col items-center z-10 w-full px-3'
                >
                  {/* Icon circle */}
                  <div
                    className='w-14 h-14 rounded-full flex items-center justify-center mb-4 relative'
                    style={{
                      background: `radial-gradient(circle, ${stage.glow} 0%, transparent 70%), ${CARD}`,
                      border: `1.5px solid ${stage.color}50`,
                      boxShadow: `0 0 20px ${stage.glow}`
                    }}
                  >
                    <Icon size={22} style={{ color: stage.color }} />
                    <span
                      className='absolute -top-2 -right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full'
                      style={{ background: stage.color, color: '#fff' }}
                    >
                      {stage.id}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className='w-full rounded-2xl p-4 text-center'
                    style={{
                      background: CARD,
                      border: `1px solid ${stage.color}25`
                    }}
                  >
                    <h3 className='text-base text-on-secondary-fixed font-bold mb-2'>
                      {stage.title}
                    </h3>
                    <p className='text-xs leading-relaxed mb-3 text-on-secondary-container'>
                      {stage.description}
                    </p>
                    <span
                      className='inline-block text-[10px] font-semibold px-2 py-1 rounded-full'
                      style={{
                        background: `${stage.color}18`,
                        color: stage.color,
                        border: `1px solid ${stage.color}30`
                      }}
                    >
                      {stage.aiLabel}
                    </span>
                  </div>
                </FadeIn>
              </div>
            )
          })}
        </div>

        {/* Timeline mobile: vertical */}
        <div className='md:hidden flex flex-col gap-0'>
          {timelineStages.map((stage, i) => {
            const { Icon } = stage
            return (
              <FadeIn key={stage.id} delay={i * 0.08} className='flex gap-4'>
                <div className='flex flex-col items-center'>
                  <div
                    className='w-11 h-11 rounded-full flex items-center justify-center shrink-0'
                    style={{
                      background: CARD,
                      border: `1.5px solid ${stage.color}60`,
                      boxShadow: `0 0 16px ${stage.glow}`
                    }}
                  >
                    <Icon size={18} style={{ color: stage.color }} />
                  </div>
                  {i < timelineStages.length - 1 && (
                    <div
                      className='w-px flex-1 mt-2'
                      style={{
                        background: `${stage.color}30`,
                        minHeight: '32px'
                      }}
                    />
                  )}
                </div>
                <div
                  className='flex-1 rounded-2xl p-4 mb-4'
                  style={{
                    background: CARD,
                    border: `1px solid ${stage.color}20`
                  }}
                >
                  <div className='flex items-center gap-2 mb-2'>
                    <span
                      className='text-xs font-bold'
                      style={{ color: stage.color }}
                    >
                      {stage.id.toString().padStart(2, '0')}
                    </span>
                    <h3 className='text-base text-on-secondary-fixed font-bold'>
                      {stage.title}
                    </h3>
                  </div>
                  <p className='text-sm leading-relaxed mb-3 text-on-secondary-container'>
                    {stage.description}
                  </p>
                  <span
                    className='inline-block text-[10px] font-semibold px-2 py-1 rounded-full'
                    style={{
                      background: `${stage.color}18`,
                      color: stage.color,
                      border: `1px solid ${stage.color}30`
                    }}
                  >
                    {stage.aiLabel}
                  </span>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MiniChart({
  data,
  color,
  label
}: {
  data: typeof traditionalData
  color: string
  label: string
}) {
  return (
    <div className='mt-4'>
      <p
        className='text-[11px] font-semibold mb-2 uppercase tracking-widest'
        style={{ color: 'rgba(240,244,255,0.35)' }}
      >
        {label}
      </p>
      <ResponsiveContainer width='100%' height={90}>
        <AreaChart
          data={data}
          margin={{ top: 4, right: 4, left: -30, bottom: 0 }}
        >
          <defs>
            <linearGradient
              id={`grad-${color.replace('#', '')}`}
              x1='0'
              y1='0'
              x2='0'
              y2='1'
            >
              <stop offset='5%' stopColor={color} stopOpacity={0.3} />
              <stop offset='95%' stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray='3 3'
            stroke='rgba(255,255,255,0.04)'
          />
          <XAxis
            dataKey='m'
            tick={{ fill: 'rgba(240,244,255,0.3)', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Area
            type='monotone'
            dataKey='costo'
            stroke={color}
            strokeWidth={2}
            fill={`url(#grad-${color.replace('#', '')})`}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

function CostComparisonSection() {
  return (
    <section className='py-24 px-6'>
      <div className='max-w-5xl mx-auto'>
        <FadeIn className='text-center mb-16'>
          <SectionLabel>
            <BarChart2 size={11} />
            Comparativa de modelos
          </SectionLabel>
          <h2 className='mt-4 text-3xl sm:text-4xl font-bold animated-gradient-text'>
            El costo de no evolucionar
          </h2>
        </FadeIn>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Traditional card */}
          <FadeIn delay={0}>
            <div
              className='rounded-3xl p-7 h-full flex flex-col border border-on-secondary-container/20'
              style={{
                background: `linear-gradient(135deg, rgba(239,68,68,0.06) 0%, ${CARD} 60%)`
              }}
            >
              <div className='flex items-center gap-3 mb-5'>
                <div className='w-9 h-9 rounded-xl flex items-center justify-center border border-on-secondary-container/40 bg-on-secondary-container/20'>
                  <XCircle size={18} className='text-on-secondary-container' />
                </div>
                <div>
                  <p className='text-[10px] uppercase tracking-widest text-on-secondary-fixed font-semibold'>
                    Modelo
                  </p>
                  <h3 className='text-lg font-bold text-on-secondary-container'>
                    Tradicional
                  </h3>
                </div>
              </div>

              <ul className='space-y-2.5 flex-1'>
                {traditionalItems.map((item) => (
                  <li
                    key={item}
                    className='flex items-center gap-2.5 text-sm on-secondary-container'
                  >
                    <span className='w-1.5 h-1.5 rounded-full shrink-0 bg-on-secondary-container' />
                    {item}
                  </li>
                ))}
              </ul>

              <MiniChart
                data={traditionalData}
                color='#5e4a26'
                label='Evolución de costos →'
              />

              <p
                className='mt-4 text-sm italic leading-relaxed text-on-secondary-container'
                style={{
                  borderTop: '1px solid rgba(239,68,68,0.1)',
                  paddingTop: '16px'
                }}
              >
                Cada nueva mejora implica más tiempo, más personas y más
                presupuesto.
              </p>
            </div>
          </FadeIn>

          {/* NexHorizons card */}
          <FadeIn delay={0.12}>
            <div
              className='rounded-3xl p-7 h-full flex flex-col relative overflow-hidden border border-primary-fixed/30'
              style={{
                background: `linear-gradient(135deg, #e6a91e11 0%, ${CARD} 60%)`
              }}
            >
              {/* Badge */}
              <div
                className='absolute top-4 right-4 text-[10px] font-bold px-2 py-1 rounded-full'
                style={{
                  background: `${AMBER}18`,
                  color: AMBER,
                  border: `1px solid ${AMBER}30`
                }}
              >
                Recomendado
              </div>

              <div className='flex items-center gap-3 mb-5'>
                <div className='w-9 h-9 rounded-xl flex items-center justify-center bg-primary-fixed/20 border border-primary-fixed/40'>
                  <CheckCircle2 size={18} className='text-primary-fixed' />
                </div>
                <div>
                  <p className='text-[10px] uppercase tracking-widest font-semibold text-on-secondary-fixed'>
                    Modelo
                  </p>
                  <h3 className='text-lg font-bold text-primary-fixed'>
                    Evolutivo NexHorizons
                  </h3>
                </div>
              </div>

              <ul className='space-y-2.5 flex-1'>
                {nexItems.map((item) => (
                  <li
                    key={item}
                    className='flex items-center gap-2.5 text-sm text-primary-fixed'
                  >
                    <span className='w-1.5 h-1.5 rounded-full shrink-0 bg-primary-fixed' />
                    {item}
                  </li>
                ))}
              </ul>

              <MiniChart
                data={nexData}
                color='#e6a91e'
                label='Evolución de costos →'
              />

              <p
                className='mt-4 text-sm italic leading-relaxed text-primary-fixed'
                style={{
                  borderTop: '1px solid rgba(59,123,255,0.12)',
                  paddingTop: '16px'
                }}
              >
                Inviertes únicamente en la evolución que tu negocio necesita.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function MaintenanceTiersSection() {
  const [activeTier, setActiveTier] = useState(1)

  return (
    <section className='py-24 px-6'>
      <div className='max-w-4xl mx-auto'>
        <FadeIn className='text-center mb-16'>
          <SectionLabel>
            <Shield size={11} />
            Inversión flexible
          </SectionLabel>
          <h2 className='mt-4 text-3xl sm:text-4xl font-bold animated-gradient-text'>
            Costo de mantenimiento a tu medida
          </h2>
          <p className='mt-3 text-base text-on-surface-variant max-w-xl mx-auto'>
            No todos los productos necesitan el mismo nivel de inversión.
            Nuestro modelo evoluciona contigo.
          </p>
        </FadeIn>

        {/* Staircase visualization */}
        <div className='flex flex-col gap-4'>
          {tiers.map((tier, i) => {
            const isActive = activeTier === tier.level
            return (
              <FadeIn key={tier.level} delay={i * 0.1}>
                <button
                  onClick={() => setActiveTier(tier.level)}
                  className={`text-left rounded-2xl overflow-hidden transition-all duration-500 w-full`}
                  style={{ outline: 'none' }}
                >
                  {/* Step bar */}
                  <div className='flex items-stretch gap-0'>
                    {/* Level indicator strip */}
                    <div
                      className='flex items-center justify-center px-5 shrink-0 rounded-l-2xl'
                      style={{
                        background: isActive ? tier.color : `${tier.color}18`,
                        minWidth: '64px',
                        transition: 'background 0.4s'
                      }}
                    >
                      <span
                        className='text-2xl font-black'
                        style={{
                          color: isActive ? '#fff' : tier.color,
                          fontFamily: "'Plus Jakarta Sans', sans-serif"
                        }}
                      >
                        {tier.level}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className='flex-1 p-5 rounded-r-2xl'
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${tier.color}12, ${CARD})`
                          : CARD,
                        border: `1px solid ${isActive ? tier.color + '40' : BORDER}`,
                        borderLeft: 'none',
                        transition: 'background 0.4s, border-color 0.4s'
                      }}
                    >
                      <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                        <div className='flex-1'>
                          <div className='flex items-center gap-2 flex-wrap'>
                            <h3
                              className={`text-base font-bold ${isActive ? 'text-on-secondary-fixed' : 'text-on-secondary-fixed/70'}`}
                            >
                              {tier.name}
                            </h3>
                            <span
                              className='text-[10px] font-semibold px-2 py-0.5 rounded-full'
                              style={{
                                background: `${tier.color}18`,
                                color: tier.color,
                                border: `1px solid ${tier.color}30`
                              }}
                            >
                              {tier.tag}
                            </span>
                          </div>

                          {isActive && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.35 }}
                              className='mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5'
                            >
                              {tier.features.map((f) => (
                                <li
                                  key={f}
                                  className='flex items-center gap-2 text-sm text-on-surface-variant'
                                >
                                  <ChevronRight
                                    size={13}
                                    style={{ color: tier.color, flexShrink: 0 }}
                                  />
                                  {f}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </div>

                        {/* Width bar showing relative scale */}
                        <div className='shrink-0 hidden sm:flex flex-col items-end gap-1'>
                          <span className='text-[10px] text-on-surface-variant/80'>
                            Inversión relativa
                          </span>
                          <div
                            className='h-1.5 rounded-full overflow-hidden bg-on-surface-variant/20'
                            style={{
                              width: '120px'
                            }}
                          >
                            <motion.div
                              className='h-full rounded-full'
                              style={{ background: tier.color }}
                              initial={{ width: 0 }}
                              animate={{
                                width:
                                  tier.level === 1
                                    ? '33%'
                                    : tier.level === 2
                                      ? '66%'
                                      : '100%'
                              }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ClosingSection() {
  return (
    <section
      className='relative py-28 px-6 overflow-hidden'
      style={{
        background: `radial-gradient(ellipse 80% 70% at 50% 100%, rgba(201,145,10,0.1) 0%, transparent 70%)`
      }}
    >
      {/* Grid */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      {/* Glow */}
      <div
        className='absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-50 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse, rgba(201,145,10,0.1) 0%, transparent 70%)'
        }}
      />

      <div className='relative max-w-3xl mx-auto text-center'>
        <FadeIn>
          <div
            className='inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase'
            style={{
              background: 'rgba(201,145,10,0.1)',
              color: AMBER,
              border: `1px solid rgba(201,145,10,0.2)`
            }}
          >
            <Zap size={11} />
            NexHorizons
          </div>
          <h2 className='text-4xl sm:text-5xl font-extrabold leading-tight animated-gradient-text'>
            Más evolución. Menos desperdicio.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className='mt-6 text-lg leading-relaxed max-w-2xl mx-auto text-on-surface-variant'>
            Utilizamos metodologías modernas y herramientas impulsadas por IA
            para reducir tiempos, optimizar recursos y mantener tus costos
            alineados con el crecimiento real de tu negocio.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'>
            <a
              href='/modelo-costos'
              className='px-6 py-3 xs:px-8 xs:py-4 bg-primary-fixed text-on-primary font-bold text-md xs:text-lg rounded-2xl border border-primary-fixed/20 hover:bg-primary-fixed-dim hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-xl shadow-primary-fixed/15 flex items-center gap-5 w-fit mx-auto'
            >
              Conocer nuestro modelo de costos
              <ArrowRight size={17} />
            </a>
          </div>
        </FadeIn>

        {/* Trust indicators */}
        <FadeIn delay={0.3}>
          <div
            className='mt-12 pt-8 flex flex-wrap items-center justify-center gap-8'
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {[
              { value: '3×', label: 'Mayor velocidad de entrega' },
              { value: '60%', label: 'Reducción de costos operativos' },
              { value: '100%', label: 'Transparencia en presupuestos' }
            ].map((stat) => (
              <div key={stat.label} className='text-center'>
                <p
                  className='text-2xl font-extrabold'
                  style={{
                    color: AMBER,
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}
                >
                  {stat.value}
                </p>
                <p className='text-xs mt-0.5 text-on-surface-variant'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export function EvolutiveModelSection() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <TimelineSection />
      <CostComparisonSection />
      <MaintenanceTiersSection />
      <ClosingSection />
    </div>
  )
}
