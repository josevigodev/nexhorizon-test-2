'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { SectionLabel } from '../SectionLabel'
import Image from 'next/image'
import CubanegocioPicture from '@/assets/images/imgs/projetcs-apps/cuba-negocios.png'
import CubanegocioPanel from '@/assets/images/imgs/projetcs-apps/Captura de pantalla 2026-06-21 134004.png'
import {
  MapPin,
  Smartphone,
  Globe,
  Settings2,
  Search,
  BarChart2,
  ArrowRight,
  Layers,
  RefreshCw,
  Zap
} from 'lucide-react'

// ── Scroll animation helper ───────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = ''
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
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

// ── Phone Mockup ──────────────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className='relative' style={{ width: 210, height: 438 }}>
      {/* Frame */}
      <div className='absolute inset-0 rounded-[38px] bg-[#1C1E28] border border-white/12 overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)]'>
        {/* Screen */}
        <div className='absolute inset-0.75 rounded-[35px] bg-[#F7F4EE] overflow-hidden'>
          {/* Dynamic island */}
          <div className='absolute top-2.5 left-1/2 -translate-x-1/2 w-18 h-5.5 bg-[#1C1E28] rounded-full z-20' />
          <Image
            className='h-full object-cover'
            alt='Cubanegocios app'
            src={CubanegocioPicture}
          />
        </div>
      </div>

      {/* Physical side buttons */}
      <div className='absolute right-0 top-25 w-0.75 h-11 bg-[#2A2C38] rounded-l' />
      <div className='absolute left-0 top-22 w-0.75 h-8 bg-[#2A2C38] rounded-r' />
      <div className='absolute left-0 top-32 w-0.75 h-8 bg-[#2A2C38] rounded-r' />
    </div>
  )
}

// ── Laptop Mockup ─────────────────────────────────────────────────────────
function LaptopMockup() {
  return (
    <div
      style={{
        transform: 'perspective(1400px) rotateY(16deg) rotateX(4deg)',
        transformOrigin: 'right 55%',
        filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.75))'
      }}
    >
      {/* Screen lid */}
      <div
        style={{ width: 450, height: 270 }}
        className='bg-[#13151E] rounded-t-xl border border-white/9 overflow-hidden'
      >
        {/* Browser toolbar */}
        <div className='h-9 bg-[#1D2030] border-b border-white/6 flex items-center px-3 gap-2'>
          <div className='flex gap-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-[#FF5F57]/75' />
            <div className='w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/75' />
            <div className='w-2.5 h-2.5 rounded-full bg-[#28C840]/75' />
          </div>
          <div className='flex items-center gap-1.5 flex-1 bg-[#252A3D] rounded-md px-2 py-0.5 mx-2'>
            <div className='w-2 h-2 rounded-full bg-green-400/50 shrink-0' />
            <span className='text-[7.5px] text-white/30'>cubanegocios.com</span>
          </div>
        </div>

        {/* Website */}
        <Image alt='Cubanegocio Panel' src={CubanegocioPanel} />
      </div>

      {/* Hinge */}
      <div
        style={{ width: 466, marginLeft: -8 }}
        className='h-2.5 bg-[#1D2030] rounded-b border-x border-b border-white/8 flex items-center justify-center'
      >
        <div className='w-16 h-1 bg-[#252A3D] rounded-full' />
      </div>
      {/* Base */}
      <div
        style={{ width: 488, marginLeft: -19 }}
        className='h-1.25 bg-[#181A25] rounded-b-xl border-x border-b border-white/6'
      />
    </div>
  )
}

// ── Device Composition ────────────────────────────────────────────────────
function DeviceComposition() {
  return (
    <div className='relative w-full' style={{ height: 560 }}>
      {/* Ambient glow */}
      <div
        className='absolute pointer-events-none'
        style={{
          left: '20%',
          top: '30%',
          width: 320,
          height: 320,
          background:
            'radial-gradient(circle, rgba(200,148,28,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
      />
      <div
        className='absolute pointer-events-none'
        style={{
          left: '55%',
          top: '10%',
          width: 240,
          height: 240,
          background:
            'radial-gradient(circle, rgba(59,121,246,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}
      />

      {/* Laptop — back-left */}
      <motion.div
        className='absolute'
        style={{ bottom: 30, left: '10%' }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <LaptopMockup />
      </motion.div>

      {/* Phone — center hero, floating */}
      <motion.div
        className='absolute'
        style={{ bottom: 0, left: '60%', translateX: '-40%', zIndex: 20 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.1 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }
        }}
      >
        <PhoneMockup />
      </motion.div>
    </div>
  )
}

// ── Feature Metric Card ───────────────────────────────────────────────────
function FeatureCard({
  icon: Icon,
  title,
  description,
  delay
}: {
  icon: React.ElementType
  title: string
  description: string
  delay: number
}) {
  return (
    <FadeUp delay={delay}>
      <div className='group relative bg-surface-container border border-white/[0.07] rounded-2xl p-4 overflow-hidden hover:border-amber-500/25 transition-all duration-300'>
        <div
          className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
          style={{
            background:
              'radial-gradient(circle at 20% 50%, rgba(200,148,28,0.04) 0%, transparent 60%)'
          }}
        />
        <div className='w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-3'>
          <Icon className='w-4 h-4 text-amber-400' />
        </div>
        <div className='text-[13px] font-bold text-on-secondary-fixed mb-1 leading-tight'>
          {title}
        </div>
        <div className='text-[12px] text-on-surface-variant leading-relaxed'>
          {description}
        </div>
      </div>
    </FadeUp>
  )
}

// ── Impact Card ───────────────────────────────────────────────────────────
function ImpactCard({
  icon: Icon,
  title,
  description,
  accent,
  delay
}: {
  icon: React.ElementType
  title: string
  description: string
  accent: string
  delay: number
}) {
  return (
    <FadeUp delay={delay}>
      <div className='group relative bg-surface-container border border-white/[0.07] rounded-2xl p-6 overflow-hidden hover:border-white/12 transition-all duration-300 h-full'>
        <div
          className='absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-60'
          style={{ background: accent }}
        />
        <div
          className='w-10 h-10 rounded-2xl flex items-center justify-center mb-4'
          style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
        >
          <Icon className='w-5 h-5' style={{ color: accent }} />
        </div>
        <div className='text-[15px] font-bold text-on-secondary-fixed mb-2'>
          {title}
        </div>
        <div className='text-[13px] text-on-surface-variant leading-relaxed'>
          {description}
        </div>
      </div>
    </FadeUp>
  )
}

// ── Tech Badge ────────────────────────────────────────────────────────────
function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className='group flex items-center gap-2 bg-surface-container border border-primary-fixed/20 rounded-xl px-3 py-2 hover:bg-surface-container-highest transition-all duration-200 cursor-default'>
      <div
        className='w-2 h-2 rounded-full shrink-0'
        style={{ background: color }}
      />
      <span className='text-[12px] font-medium text-on-surface-variant transition-colors'>
        {name}
      </span>
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────────────────
export default function SuccessCaseSection() {
  return (
    <div
      className='text-foreground min-h-screen'
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Subtle top noise/grain effect */}
      <div
        className='fixed inset-0 pointer-events-none opacity-[0.025]'
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat'
        }}
      />

      <section className='relative overflow-hidden'>
        {/* Background radial spotlight */}
        <div
          className='absolute inset-0 pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(200,148,28,0.07) 0%, transparent 60%)'
          }}
        />

        <div className='relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28'>
          {/* ── Section Header ─────────────────────────────────────────── */}
          <FadeUp className='text-center mb-16 lg:mb-20'>
            <SectionLabel>
              <div className='w-1.5 h-1.5 rounded-full bg-amber-400' />
              <span className='text-[11px] font-bold tracking-[0.2em] uppercase'>
                Caso de Éxito
              </span>
            </SectionLabel>

            <h2 className='text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight mb-5 max-w-4xl mx-auto animated-gradient-text'>
              Cuba Negocios:{' '}
              <span
                className='text-transparent'
                style={{
                  WebkitTextStroke: '1px rgba(255,255,255,0.3)'
                }}
              >
                transformando
              </span>{' '}
              la visibilidad digital de miles de negocios.
            </h2>

            <p className='text-[16px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed'>
              Desarrollamos un ecosistema digital completo para conectar
              negocios, clientes y oportunidades mediante una experiencia
              moderna y escalable.
            </p>
          </FadeUp>

          {/* ── Project Spotlight ──────────────────────────────────────── */}
          <div className='grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 mb-20 lg:mb-24 items-center'>
            {/* Left: Device composition */}
            <FadeUp
              delay={0.1}
              className='flex items-center justify-center lg:justify-start'
            >
              <DeviceComposition />
            </FadeUp>

            {/* Right: Description + feature metrics */}
            <div>
              <FadeUp delay={0.2}>
                <div className='mb-2'>
                  <span
                    className='text-[11px] font-bold text-amber-400/70 tracking-[0.2em] uppercase'
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    El Proyecto
                  </span>
                </div>
                <h3 className='text-3xl lg:text-4xl font-black leading-tight mb-4 animated-gradient-text'>
                  Ecosistema digital completo
                </h3>
                <p className='text-[15px] text-on-surface-variant leading-relaxed mb-8'>
                  Cuba Negocios necesitaba una solución capaz de centralizar
                  información comercial, mejorar la visibilidad de los negocios
                  y ofrecer una experiencia moderna tanto para usuarios finales
                  como para administradores.
                </p>
              </FadeUp>

              {/* Feature metrics grid */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                <FeatureCard
                  icon={MapPin}
                  title='Directorio geolocalizado'
                  description='Búsqueda de negocios por ubicación en tiempo real'
                  delay={0.25}
                />
                <FeatureCard
                  icon={Smartphone}
                  title='App móvil multiplataforma'
                  description='iOS y Android con experiencia nativa unificada'
                  delay={0.3}
                />
                <FeatureCard
                  icon={Globe}
                  title='Plataforma web optimizada'
                  description='Rendimiento superior, SEO y accesibilidad integrados'
                  delay={0.35}
                />
                <FeatureCard
                  icon={Settings2}
                  title='Sistema administrativo'
                  description='Gestión centralizada de contenido y usuarios'
                  delay={0.4}
                />
                <FeatureCard
                  icon={Search}
                  title='Búsqueda inteligente'
                  description='Filtros avanzados y sugerencias contextuales'
                  delay={0.45}
                />
                <FeatureCard
                  icon={BarChart2}
                  title='Arquitectura escalable'
                  description='Infraestructura cloud preparada para crecer'
                  delay={0.5}
                />
              </div>
            </div>
          </div>

          {/* ── Divider ────────────────────────────────────────────────── */}
          <div className='w-full h-px bg-white/6 mb-20 lg:mb-24' />

          {/* ── Impact Section ─────────────────────────────────────────── */}
          <FadeUp className='mb-10'>
            <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4'>
              <div>
                <span
                  className='text-[11px] font-bold text-white/30 tracking-[0.2em] uppercase block mb-2'
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Impacto real
                </span>
                <h2 className='text-3xl lg:text-4xl font-black text-white leading-tight'>
                  Una plataforma construida
                  <br />
                  para crecer.
                </h2>
              </div>
              <p
                className='text-[14px] text-white/40 max-w-xs leading-relaxed'
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Tres pilares que garantizan la viabilidad a largo plazo del
                producto digital.
              </p>
            </div>
          </FadeUp>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 lg:mb-24'>
            <ImpactCard
              icon={Layers}
              title='Experiencia Unificada'
              description='Usuarios, negocios y administradores interactúan dentro de un mismo ecosistema digital cohesionado.'
              accent='#C8941C'
              delay={0}
            />
            <ImpactCard
              icon={Zap}
              title='Escalabilidad'
              description='Arquitectura diseñada para soportar crecimiento continuo y la incorporación de nuevas funcionalidades sin fricciones.'
              accent='#3B79F6'
              delay={0.1}
            />
            <ImpactCard
              icon={RefreshCw}
              title='Mantenimiento Evolutivo'
              description='Preparada para evolucionar mediante mejoras iterativas, optimización constante y ciclos de entrega continuos.'
              accent='#22C55E'
              delay={0.2}
            />
          </div>

          {/* ── Tech Stack ─────────────────────────────────────────────── */}
          <div className='mb-20 lg:mb-24'>
            <FadeUp className='mb-8'>
              <div className='flex items-center gap-4'>
                <div>
                  <SectionLabel>Stack tecnológico</SectionLabel>
                  <h2 className='text-2xl lg:text-3xl font-black animated-gradient-text'>
                    Tecnología utilizada
                  </h2>
                </div>
                <div className='flex-1 h-px bg-white/6 hidden sm:block ml-6' />
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className='flex flex-wrap gap-2.5'>
                {[
                  { name: 'Flutter', color: '#54C5F8' },
                  { name: 'React', color: '#61DAFB' },
                  { name: 'Next.js', color: '#FFFFFF' },
                  { name: 'TypeScript', color: '#3178C6' },
                  { name: 'Firebase', color: '#FFCA28' },
                  { name: 'Node.js', color: '#339933' },
                  { name: 'GitHub', color: '#E6EDF3' },
                  { name: 'Vercel', color: '#FFFFFF' },
                  { name: 'Tailwind CSS', color: '#06B6D4' },
                  { name: 'Arquitectura Cloud', color: '#7C3AED' }
                ].map((tech) => (
                  <TechBadge
                    key={tech.name}
                    name={tech.name}
                    color={tech.color}
                  />
                ))}
              </div>
            </FadeUp>
          </div>

          {/* ── CTA Block ──────────────────────────────────────────────── */}
          <FadeUp>
            <div className='relative rounded-3xl overflow-hidden border border-white/8'>
              {/* Background */}
              <div className='absolute inset-0 bg-surface-container' />
              <div className='absolute inset-0 pointer-events-none' />
              {/* Top accent line */}
              <div
                className='absolute top-0 left-0 right-0 h-px'
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(123,111,91,0.12), transparent)'
                }}
              />

              <div className='relative px-8 py-12 lg:px-14 lg:py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8'>
                <div className='max-w-xl'>
                  <h2 className='text-2xl lg:text-4xl font-black text-on-secondary-fixed leading-tight mb-3'>
                    ¿Quieres construir algo similar?
                  </h2>
                  <p className='text-[15px] text-on-surface-variant leading-relaxed'>
                    Aplicamos la misma metodología de validación, desarrollo y
                    evolución utilizada en Cuba Negocios para ayudar a empresas
                    a lanzar productos digitales con menor riesgo y mayor
                    velocidad.
                  </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-3 shrink-0'>
                  <a
                    href='/casos/cubanegocios'
                    className='px-6 py-3 xs:px-8 xs:py-4 bg-primary-fixed text-on-primary font-bold text-md xs:text-lg rounded-2xl border border-primary-fixed/20 hover:bg-primary-fixed-dim hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-xl shadow-primary-fixed/15 flex items-center gap-5 w-fit mx-auto'
                  >
                    Explorar caso completo
                    <ArrowRight className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5' />
                  </a>
                  <button className='px-6 py-3 xs:px-8 xs:py-4 border border-outline/70 bg-surface-container-low text-primary-fixed font-bold text-md xs:text-lg rounded-2xl hover:bg-surface-container-high hover:border-primary-fixed/40 hover:-translate-y-1 transition-all duration-300 inline-block'>
                    Hablar con un experto
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
